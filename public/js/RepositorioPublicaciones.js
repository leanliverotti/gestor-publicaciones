import { EventEmitter } from "./EventEmitter.js";
import { Publicacion } from "./Publicacion.js";

export class RepositorioPublicaciones extends EventEmitter {
  constructor() {
    super();
    this.publicaciones = [];
    this.proximoId = 1;
  }

  agregar(autor, titulo, descripcion, categoria) {
    const publicacion = autor instanceof Publicacion ? autor : new Publicacion(this.proximoId++, autor, titulo, descripcion, categoria);
    if (autor instanceof Publicacion) this.proximoId = Math.max(this.proximoId, publicacion.id + 1);
    this.publicaciones.push(publicacion);
    this.emit("publicacionAgregada", publicacion);
    return publicacion;
  }

  listar() { return [...this.publicaciones]; }
  buscarPorId(id) { return this.publicaciones.find((publicacion) => publicacion.id === Number(id)); }
  buscarPorUsuario(nombre) { return this.publicaciones.find((publicacion) => publicacion.esDeAutor(nombre)); }
  listaResumen() { return this.publicaciones.map((publicacion) => publicacion.mostrarResumen()); }
  filtrarPorTipo(claseConstructor) { return this.publicaciones.filter((publicacion) => publicacion instanceof claseConstructor); }
  buscarPorEtiqueta(etiqueta) { return this.publicaciones.filter((publicacion) => publicacion.activa && publicacion.tieneEtiqueta(etiqueta)); }
  pendientesDeRevision() { return this.publicaciones.filter((publicacion) => publicacion.activa && publicacion.requiereRevision()); }
  obtenerEstado() { return `Publicaciones activas: ${this.publicaciones.filter((p) => p.activa).length}`; }
  obtenerEstadoInactivas() { return `Publicaciones inactivas: ${this.publicaciones.filter((p) => !p.activa).length}`; }

  actualizar(id, cambios) {
    const anterior = this.buscarPorId(id);
    if (!anterior) throw new Error("Publicación inexistente");
    const actualizada = new Publicacion(anterior.id, cambios.autor ?? anterior.autor, cambios.titulo ?? anterior.titulo, cambios.descripcion ?? anterior.descripcion, cambios.categoria ?? anterior.categoria);
    Object.assign(actualizada, { activa: anterior.activa, destacado: anterior.destacado, etiquetas: anterior.etiquetas, reportes: anterior.reportes, estado: anterior.estado, fechaPublicacion: anterior.fechaPublicacion });
    this.publicaciones[this.publicaciones.indexOf(anterior)] = actualizada;
    return actualizada;
  }

  eliminar(id) {
    const publicacion = this.buscarPorId(id);
    if (!publicacion) return false;
    this.publicaciones.splice(this.publicaciones.indexOf(publicacion), 1);
    return true;
  }
}
