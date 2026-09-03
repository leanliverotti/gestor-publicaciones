import { EventEmitter } from "./EventEmitter.js";

export class RepositorioPublicaciones extends EventEmitter {
  constructor() {
    super();
    this.publicaciones = [];
  }

  agregar(publicacion) {
    this.publicaciones.push(publicacion);
    this.emit("publicacionAgregada", publicacion);
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
}
