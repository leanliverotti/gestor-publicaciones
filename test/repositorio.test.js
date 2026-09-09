import { RepositorioPublicaciones } from "../src/RepositorioPublicaciones.js";
import { Publicacion } from "../src/Publicacion.js";
 
describe("RepositorioPublicaciones", () => {
  test("buscarPorEtiqueta devuelve coincidencias activas", () => {
    const repositorio = new RepositorioPublicaciones();
    const publicacion = new Publicacion("Ana", "Apuntes de Redes", "...");
    publicacion.agregarEtiqueta("redes");
    repositorio.agregar(publicacion);
 
    expect(repositorio.buscarPorEtiqueta("redes")).toEqual([publicacion]);
  });
 
  test("una publicación dada de baja queda excluida", () => {
    const repositorio = new RepositorioPublicaciones();
    const publicacion = new Publicacion("Ana", "Apuntes de Redes", "...");
    publicacion.agregarEtiqueta("redes");
    publicacion.darDeBaja();
    repositorio.agregar(publicacion);
 
    expect(repositorio.buscarPorEtiqueta("redes")).toEqual([]);
  });
 
  test("una etiqueta inexistente devuelve un arreglo vacío", () => {
    const repositorio = new RepositorioPublicaciones();
    expect(repositorio.buscarPorEtiqueta("inexistente")).toEqual([]);
  });

  test("cada subclase arma su propio resumen", () => {
  const venta = new PublicacionVenta("Ana", "Calculadora", "...", 5000);
  const servicio = new PublicacionServicio("Luis", "Clases de Álgebra", "...");
 
  expect(venta.mostrarResumen()).toContain("$5000");
  expect(servicio.mostrarResumen()).toContain("Clases de Álgebra");
});
});