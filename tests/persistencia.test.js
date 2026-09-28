import { expect, test } from "@jest/globals";
import { mkdtemp } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { RepositorioPublicaciones } from "../src/RepositorioPublicaciones.js";

test("recupera publicaciones desde la misma ruta", async () => {
  const carpeta = await mkdtemp(join(tmpdir(), "publicaciones-"));
  const ruta = join(carpeta, "datos.json");
  const primero = new RepositorioPublicaciones(ruta);
  await primero.cargar();
  await primero.agregar("Ana", "Apuntes de redes", "Descripción válida con al menos veinte caracteres.", "aviso");
  const segundo = new RepositorioPublicaciones(ruta);
  await segundo.cargar();
  expect(segundo.listar()).toHaveLength(1);
  expect(segundo.listar()[0].mostrarResumen()).toContain("Apuntes de redes");
});
