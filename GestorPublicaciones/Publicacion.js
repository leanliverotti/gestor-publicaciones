// Clase Publicacion: modela un aviso de la comunidad estudiantil
// (ej: "vendo apuntes", "busco companiero de grupo", "ofrezco clases particulares")

export class Publicacion {
  // Atributos: titulo, descripcion, autor, fechaPublicacion, activa
  constructor(titulo, descripcion, autor) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.autor = autor;
    this.fechaPublicacion = new Date();
    this.activa = true;
  }

  // Devuelve un string corto combinando titulo y autor
  mostrarResumen() {
    return `"${this.titulo}" - publicado por ${this.autor}`;
  }

  // Devuelve el valor del atributo activa
  estaActiva() {
    return this.activa;
  }

  // Desafio opcional: true si el autor coincide con el nombre recibido
  esDeAutor(nombre) {
    return this.autor === nombre;
  }
}
