import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { Publicacion } from "./Publicacion.js";

export class RepositorioPublicaciones {
  constructor(ruta) {
    this.ruta = ruta;
    this.publicaciones = [];
    this.proximoId = 1;
  }

  async cargar() {
    try {
      const datos = JSON.parse(await readFile(this.ruta, "utf8"));
      this.publicaciones = datos.map((dato) => this.restaurar(dato));
      this.proximoId = Math.max(0, ...this.publicaciones.map((p) => p.id)) + 1;
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
      await this.guardar();
    }
  }

  restaurar(dato) {
    const publicacion = new Publicacion(dato.id, dato.autor, dato.titulo, dato.descripcion, dato.categoria);
    Object.assign(publicacion, { activa: dato.activa, etiquetas: dato.etiquetas ?? [], reportes: dato.reportes ?? [], estado: dato.estado ?? "pendiente" });
    return publicacion;
  }

  async guardar() {
    await mkdir(dirname(this.ruta), { recursive: true });
    await writeFile(this.ruta, JSON.stringify(this.publicaciones, null, 2), "utf8");
  }

  async agregar(autor, titulo, descripcion, categoria) {
    const publicacion = new Publicacion(this.proximoId++, autor, titulo, descripcion, categoria);
    this.publicaciones.push(publicacion);
    await this.guardar();
    return publicacion;
  }

  listar() { return [...this.publicaciones]; }
  buscarPorId(id) { return this.publicaciones.find((publicacion) => publicacion.id === Number(id)); }
  obtenerEstado() { return `Publicaciones activas: ${this.publicaciones.filter((p) => p.activa).length}`; }
  obtenerEstadoInactivas() { return `Publicaciones inactivas: ${this.publicaciones.filter((p) => !p.activa).length}`; }

  async actualizar(id, cambios) {
    const anterior = this.buscarPorId(id);
    if (!anterior) throw new Error("Publicación inexistente");
    const actualizada = new Publicacion(anterior.id, cambios.autor ?? anterior.autor, cambios.titulo ?? anterior.titulo, cambios.descripcion ?? anterior.descripcion, cambios.categoria ?? anterior.categoria);
    Object.assign(actualizada, { activa: anterior.activa, etiquetas: anterior.etiquetas, reportes: anterior.reportes, estado: anterior.estado });
    this.publicaciones[this.publicaciones.indexOf(anterior)] = actualizada;
    await this.guardar();
    return actualizada;
  }

  async eliminar(id) {
    const publicacion = this.buscarPorId(id);
    if (!publicacion) return false;
    this.publicaciones.splice(this.publicaciones.indexOf(publicacion), 1);
    await this.guardar();
    return true;
  }
}
