export const CATEGORIAS_PERMITIDAS = ["general", "aviso", "evento", "compraventa"];

export class Publicacion {
  constructor(id, autor, titulo, descripcion, categoria = "general") {
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
    this.activa = true;
    this.etiquetas = [];
    this.reportes = [];
    this.estado = "pendiente";
  }

  mostrarResumen() { return `"${this.titulo}" - publicado por ${this.autor}`; }
}
