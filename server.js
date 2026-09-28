import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { RepositorioPublicaciones } from "./src/RepositorioPublicaciones.js";
import { convertirAXML, paraExponer } from "./src/formatos.js";
import crearRouterPublicaciones from "./routes/publicaciones.routes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repositorio = new RepositorioPublicaciones(path.join(__dirname, "data", "publicaciones.json"));
await repositorio.cargar();

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.get("/estado-comunidad", (req, res) => res.send(repositorio.obtenerEstado()));
app.get("/estado-inactivas", (req, res) => res.send(repositorio.obtenerEstadoInactivas()));
app.get("/datos/publicaciones.json", (req, res) => res.json(repositorio.listar().map(paraExponer)));
app.get("/datos/publicaciones.xml", (req, res) => res.type("application/xml").send(convertirAXML(repositorio.listar())));
app.use("/publicaciones", crearRouterPublicaciones(repositorio));
app.listen(3000, () => console.log("Gestor en http://localhost:3000"));
