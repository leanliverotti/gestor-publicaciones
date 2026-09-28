import { beforeEach, describe, expect, test } from "@jest/globals";
import { RepositorioPublicaciones } from "../src/RepositorioPublicaciones.js";

const contenido = "Descripción válida con al menos veinte caracteres.";

describe("RepositorioPublicaciones CRUD", () => {
  let repositorio;

  beforeEach(() => {
    repositorio = new RepositorioPublicaciones(null);
    repositorio.guardar = async () => {};
  });

  test("asigna ids crecientes", async () => {
    expect((await repositorio.agregar("Ana", "Apuntes de redes", contenido, "aviso")).id).toBe(1);
    expect((await repositorio.agregar("Luis", "Clases de álgebra", contenido, "general")).id).toBe(2);
  });

  test("listar devuelve una copia", async () => {
    await repositorio.agregar("Ana", "Apuntes de redes", contenido, "aviso");
    const lista = repositorio.listar();
    lista.pop();
    expect(repositorio.listar()).toHaveLength(1);
  });

  test("actualizar inválido no modifica", async () => {
    const creada = await repositorio.agregar("Ana", "Apuntes de redes", contenido, "aviso");
    await expect(repositorio.actualizar(creada.id, { titulo: "mal" })).rejects.toThrow("El título debe tener entre 5 y 80 caracteres");
    expect(repositorio.buscarPorId(creada.id).titulo).toBe("Apuntes de redes");
  });

  test("eliminar inexistente devuelve false", async () => {
    await expect(repositorio.eliminar(99)).resolves.toBe(false);
  });
});
