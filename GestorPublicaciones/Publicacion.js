// Clase Publicacion: modela un aviso de la comunidad estudiantil
// (ej: "vendo apuntes", "busco companiero de grupo", "ofrezco clases particulares")

export class Publicacion {
  // Atributos: titulo, descripcion, autor, fechaPublicacion, activa
  constructor(titulo, descripcion, autor) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.autor = usuario;
    this.fechaPublicacion = new Date();
    this.activa = true;
  }

  // Devuelve un string corto combinando titulo y autor
  mostrarResumen() {
<<<<<<< HEAD
    return `"${this.titulo}" - publicado por ${this.autor.mostrarPerfil()}`;
=======
    return `"${this.titulo}" - publicado por ${autor.mostrarPerfil()}`;
>>>>>>> 425ae710257862b903be6cfecfe6dd6d0aea82bb
  }

  // Devuelve el valor del atributo activa
  estaActiva() {
    return this.activa;
  }

  // Desafio opcional: true si el autor coincide con el nombre recibido
  esDeAutor(nombre) {
    return this.autor.obtenerNombre() === nombre ;
  }

}


