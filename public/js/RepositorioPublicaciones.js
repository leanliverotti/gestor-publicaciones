import { EventEmitter } from "./EventEmitter.js";
import { Usuario } from "./usuario.js";
import { Publicacion } from "./Publicacion.js";
import { PublicacionVenta } from "./publicacionVenta.js";
import { PublicacionServicio } from "./publicacionServicio.js";

export class RepositorioPublicaciones extends EventEmitter {
  constructor() {
    super();
    this.publicaciones = [];
  }

  agregar(publicacion) {
    this.publicaciones.push(publicacion);
    this.emit("publicacionAgregada", publicacion);
  }

  // Reconstruye instancias reales a partir de los datos planos que llegan del
  // servidor: sin esto quedarian objetos JSON sueltos, sin los metodos del dominio.
  cargarDesde(datos) {
    this.publicaciones = datos.map((dato) => this.instanciarDesdeDato(dato));
  }

  instanciarDesdeDato(dato) {
    const autor = new Usuario(dato.autorNombre, dato.autorEmail);
    let publicacion;

    if (dato.tipo === "venta") {
      publicacion = new PublicacionVenta(dato.titulo, dato.descripcion, autor, dato.precio, dato.stock);
    } else if (dato.tipo === "servicio") {
      publicacion = new PublicacionServicio(dato.titulo, dato.descripcion, autor, dato.modalidad, dato.duracionMinutos);
    } else {
      publicacion = new Publicacion(dato.titulo, dato.descripcion, autor);
    }

    publicacion.id = dato.id;
    publicacion.activa = dato.activa;
    publicacion.destacado = dato.destacado;
    return publicacion;
  }

  listar() {
    return this.publicaciones;
  }

  buscarPorId(id) {
    return this.publicaciones.find((publicacion) => publicacion.id === id);
  }

  buscarPorUsuario(nombre) {
    return this.publicaciones.find((publicacion) => publicacion.esDeAutor(nombre));
  }

  listaResumen() {
    return this.publicaciones.map((publicacion) => publicacion.mostrarResumen());
  }

  filtrarPorTipo(claseConstructor) {
    return this.publicaciones.filter(
      (publicacion) => publicacion instanceof claseConstructor
    );
  }

  // Solo publicaciones activas: una publicacion dada de baja deja de aparecer
  // aunque conserve la etiqueta.
  buscarPorEtiqueta(etiqueta) {
    return this.publicaciones.filter(
      (publicacion) => publicacion.activa && publicacion.tieneEtiqueta(etiqueta)
    );
  }

  // Solo publicaciones activas que ya juntaron los reportes suficientes.
  pendientesDeRevision() {
    return this.publicaciones.filter(
      (publicacion) => publicacion.activa && publicacion.requiereRevision()
    );
  }
}
