// Clase Publicacion: modela un aviso de la comunidad estudiantil
// (ej: "vendo apuntes", "busco companiero de grupo", "ofrezco clases particulares")

export class Publicacion {
  // Contador que comparten la clase y todas sus subclases: cada publicacion se
  // asigna su propio id al crearse, en vez de que se lo ponga el DOM desde afuera.
  static ultimoId = 0;

  // Atributos: id, titulo, descripcion, autor, fechaPublicacion, activa, destacado
  constructor(titulo, descripcion, autor) {
    this.id = ++Publicacion.ultimoId;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.autor = autor;
    this.fechaPublicacion = new Date();
    this.activa = true;
    this.destacado = false;
  }

  // Devuelve un string corto combinando titulo y autor
  mostrarResumen() {
    return `"${this.titulo}" - publicado por ${this.autor.mostrarPerfil()}`;
  }

  // Devuelve el valor del atributo activa
  estaActiva() {
    return this.activa;
  }

  // Desafio opcional: true si el autor coincide con el nombre recibido
  esDeAutor(nombre) {
    return this.autor.obtenerNombre() === nombre ;
  }

  darDeBaja() {
    this.activa = false;
  }

  destacar() {
    this.destacado = true;
  }

  opacar() {
    this.destacado = false;
  }

  obtenerTitulo() {
    return this.titulo
  }

    diasPublicada(){
    const ms = new Date() - this.fechaPublicacion;
    return Math.floor(ms / (1000 * 60 *60 *24));
    
  }
}


