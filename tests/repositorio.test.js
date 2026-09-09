import { RepositorioPublicaciones } from "../public/js/RepositorioPublicaciones.js";
import { Publicacion } from "../public/js/Publicacion.js";
import { Usuario } from "../public/js/usuario.js";

describe("RepositorioPublicaciones", () => {
  test("buscarPorEtiqueta devuelve coincidencias activas", () => {
    const repositorio = new RepositorioPublicaciones();
    const ana = new Usuario("Ana", "ana@gmail.com");
    const publicacion = new Publicacion("Apuntes de Redes", "...", ana);
    publicacion.agregarEtiqueta("redes");
    repositorio.agregar(publicacion);

    expect(repositorio.buscarPorEtiqueta("redes")).toEqual([publicacion]);
  });

  test("una publicación dada de baja queda excluida", () => {
    const repositorio = new RepositorioPublicaciones();
    const ana = new Usuario("Ana", "ana@gmail.com");
    const publicacion = new Publicacion("Apuntes de Redes", "...", ana);
    publicacion.agregarEtiqueta("redes");
    publicacion.darDeBaja();
    repositorio.agregar(publicacion);

    expect(repositorio.buscarPorEtiqueta("redes")).toEqual([]);
  });

  test("una etiqueta inexistente devuelve un arreglo vacío", () => {
    const repositorio = new RepositorioPublicaciones();

    expect(repositorio.buscarPorEtiqueta("inexistente")).toEqual([]);
  });
});
