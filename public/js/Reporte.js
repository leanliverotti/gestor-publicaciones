// Reporte: registra que un usuario marco una publicacion para revision,
// con el motivo (obligatorio) y la fecha en que lo hizo.

export class Reporte {
  constructor(usuario, motivo) {
    const normalizado = motivo.trim();
    if (!normalizado) {
      throw new Error("Motivo inválido");
    }
    this.usuario = usuario;
    this.motivo = normalizado;
    this.fecha = new Date();
  }
}
