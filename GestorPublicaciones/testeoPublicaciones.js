import { publicacionServicio } from "./publicacionServicio.js";
import { publicacionVenta } from "./publicacionVenta.js";
import { Publicacion } from "./Publicacion.js";

const p1 = new publicacionVenta ("vendo resumenes de historia", "de la pagina 10 a la 58",  "angel", 5000)

const p2 = new publicacionServicio ("doy clases avanzadas de matematicas", "solo los sabados y domingos", "joaquin", "presencial", "dos horas")

const publicaciones = [p1,p2];

publicaciones.forEach(publicacion => (console.log(publicacion instanceof Publicacion)));


