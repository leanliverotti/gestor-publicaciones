export function paraExponer(publicacion) {
  return { id: publicacion.id, autor: publicacion.autor, titulo: publicacion.titulo, descripcion: publicacion.descripcion, categoria: publicacion.categoria, activa: publicacion.activa, etiquetas: publicacion.etiquetas, estado: publicacion.estado };
}

export function convertirAJSON(publicaciones) { return JSON.stringify(publicaciones.map(paraExponer)); }
export function convertirDesdeJSON(texto) { return JSON.parse(texto); }

function escaparXML(valor) {
  return String(valor).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

export function convertirAXML(publicaciones) {
  const elementos = publicaciones.map((publicacion) => {
    const dato = paraExponer(publicacion);
    const etiquetas = dato.etiquetas.map((etiqueta) => `<etiqueta>${escaparXML(etiqueta)}</etiqueta>`).join("");
    return `<publicacion id="${escaparXML(dato.id)}"><autor>${escaparXML(dato.autor)}</autor><titulo>${escaparXML(dato.titulo)}</titulo><descripcion>${escaparXML(dato.descripcion)}</descripcion><categoria>${escaparXML(dato.categoria)}</categoria><activa>${dato.activa}</activa><etiquetas>${etiquetas}</etiquetas><estado>${escaparXML(dato.estado)}</estado></publicacion>`;
  }).join("");
  return `<?xml version="1.0" encoding="UTF-8"?><publicaciones>${elementos}</publicaciones>`;
}
