import { Publicacion } from "./Publicacion.js";
import { Reglas } from "./reglas.js";

// Funcion suelta (no es metodo de ninguna clase): depende de Publicacion y de Reglas.
export function validarPublicacion(publicacion, reglas) {
    if (publicacion == null) return false;
    if (!(publicacion instanceof Publicacion)) return false;
    if (!(reglas instanceof Reglas)) return false;

    const titulo = publicacion.obtenerTitulo();
    if (typeof titulo !== "string") return false;

    const min = reglas.obtenerMin();
    const max = reglas.obtenerMax();

    return titulo.length > min && titulo.length < max;
}
