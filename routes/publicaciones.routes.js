import { Router } from "express";
import { CATEGORIAS_PERMITIDAS } from "../src/Publicacion.js";

export default function crearRouterPublicaciones(repositorio) {
  const router = Router();
  router.get("/", (req, res) => res.json(repositorio.listar()));
  router.get("/categorias", (req, res) => res.json(CATEGORIAS_PERMITIDAS));
  router.post("/", async (req, res) => {
    try {
      const publicacion = await repositorio.agregar(req.body.autor, req.body.titulo, req.body.descripcion, req.body.categoria);
      res.status(201).send(publicacion.mostrarResumen());
    } catch (error) {
      res.status(400).send(error.message);
    }
  });
  router.put("/:id", async (req, res) => {
    try {
      res.json(await repositorio.actualizar(req.params.id, req.body));
    } catch (error) {
      res.status(error.message === "Publicación inexistente" ? 404 : 400).send(error.message);
    }
  });
  router.delete("/:id", async (req, res) => {
    if (!await repositorio.eliminar(req.params.id)) return res.status(404).send("Publicación inexistente");
    res.status(204).end();
  });
  return router;
}
