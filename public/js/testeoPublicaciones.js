import { PublicacionServicio } from "./publicacionServicio.js";
import { PublicacionVenta } from "./publicacionVenta.js";
import { Publicacion } from "./Publicacion.js";
import { Usuario } from "./usuario.js";

const angel = new Usuario("angel", "angel@gmail.com")
const joaquin = new Usuario("joaquin", "joaquin@gmail.com")

const p1 = new PublicacionVenta("vendo resumenes de historia", "de la pagina 10 a la 58", angel, 5000)

const p2 = new PublicacionServicio("doy clases avanzadas de matematicas", "solo los sabados y domingos", joaquin, "presencial", 120)

const publicaciones = [p1, p2];

publicaciones.forEach(publicacion => (console.log(publicacion instanceof Publicacion)));
