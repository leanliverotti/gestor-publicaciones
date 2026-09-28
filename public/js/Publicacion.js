import { Reporte } from "./Reporte.js";

export const CATEGORIAS_PERMITIDAS = ["general", "aviso", "evento", "compraventa"];

export class Publicacion {
  static ultimoId = 0;

  constructor(id, autor, titulo, descripcion, categoria = "general") {
    const modoAnterior = typeof titulo === "object" && titulo !== null;
    if (modoAnterior) {
      this.id = ++Publicacion.ultimoId;
      this.titulo = id;
      this.descripcion = autor;
      this.autor = titulo;
      this.categoria = "general";
    } else {
      const autorNormalizado = autor?.trim() ?? "";
      const tituloNormalizado = titulo?.trim() ?? "";
      const descripcionNormalizada = descripcion?.trim() ?? "";
      if (!autorNormalizado) throw new Error("El autor es obligatorio");
      if (tituloNormalizado.length < 5 || tituloNormalizado.length > 80) throw new Error("El título debe tener entre 5 y 80 caracteres");
      if (descripcionNormalizada.length < 20 || descripcionNormalizada.length > 500) throw new Error("La descripcion debe tener entre 20 y 500 caracteres");
      if (!CATEGORIAS_PERMITIDAS.includes(categoria)) throw new Error(`La categoría debe ser una de: ${CATEGORIAS_PERMITIDAS.join(", ")}`);
      this.id = id;
      this.autor = autorNormalizado;
      this.titulo = tituloNormalizado;
      this.descripcion = descripcionNormalizada;
      this.categoria = categoria;
    }
    this.fechaPublicacion = new Date();
    this.activa = true;
    this.destacado = false;
    this.etiquetas = [];
    this.reportes = [];
    this.estado = "pendiente";
  }

  mostrarResumen() {
    const autor = typeof this.autor === "string" ? this.autor : this.autor.mostrarPerfil();
    return `"${this.titulo}" - publicado por ${autor}`;
  }

  get resumen() { return `${this.autorNombre()} - ${this.titulo} (${this.activa ? "activa" : "inactiva"})`; }
  autorNombre() { return typeof this.autor === "string" ? this.autor : this.autor.obtenerNombre(); }
  estaActiva() { return this.activa; }
  esDeAutor(nombre) { return this.autorNombre() === nombre; }
  darDeBaja() { this.activa = false; }
  destacar() { this.destacado = true; }
  opacar() { this.destacado = false; }
  obtenerTitulo() { return this.titulo; }
  diasPublicada() { return Math.floor((new Date() - this.fechaPublicacion) / 86400000); }

  agregarEtiqueta(etiqueta) {
    const normalizada = etiqueta.trim();
    if (!normalizada) throw new Error("Etiqueta inválida");
    if (!this.tieneEtiqueta(normalizada)) this.etiquetas.push(normalizada);
  }

  tieneEtiqueta(etiqueta) { return this.etiquetas.some((actual) => actual.toLowerCase() === etiqueta.trim().toLowerCase()); }

  reportar(usuario, motivo) {
    if (this.reportes.some((reporte) => reporte.usuario === usuario)) throw new Error("El usuario ya reportó esta publicación");
    this.reportes.push(new Reporte(usuario, motivo));
  }

  requiereRevision() { return this.reportes.length >= 3; }

  async revisar(servicioModeracion) {
    const decision = await servicioModeracion.evaluar(this);
    if (decision === "aprobado") this.estado = "aprobada";
    else if (decision === "rechazado") this.estado = "rechazada";
    else throw new Error("Decisión de moderación inválida");
    return this.estado;
  }
}
