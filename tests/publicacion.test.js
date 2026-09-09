import { Publicacion } from "../public/js/Publicacion.js";
import { PublicacionVenta } from "../public/js/publicacionVenta.js";
import { PublicacionServicio } from "../public/js/publicacionServicio.js";
import { Usuario } from "../public/js/usuario.js";

describe("Publicacion", () => {
  test("una publicación nueva comienza activa y sin etiquetas", () => {
    const ana = new Usuario("Ana", "ana@gmail.com");
    const publicacion = new Publicacion("Apuntes de Redes", "...", ana);

    expect(publicacion.activa).toBe(true);
    expect(publicacion.etiquetas).toEqual([]);
  });

  test("agregarEtiqueta incorpora una etiqueta normalizada", () => {
    const ana = new Usuario("Ana", "ana@gmail.com");
    const publicacion = new Publicacion("Apuntes de Redes", "...", ana);

    publicacion.agregarEtiqueta("  redes  ");

    expect(publicacion.etiquetas).toEqual(["redes"]);
  });

  test("darDeBaja cambia activa a false", () => {
    const ana = new Usuario("Ana", "ana@gmail.com");
    const publicacion = new Publicacion("Apuntes de Redes", "...", ana);

    publicacion.darDeBaja();

    expect(publicacion.activa).toBe(false);
  });

  test("una etiqueta repetida no se agrega dos veces", () => {
    const ana = new Usuario("Ana", "ana@gmail.com");
    const publicacion = new Publicacion("Apuntes de Redes", "...", ana);

    publicacion.agregarEtiqueta("redes");
    publicacion.agregarEtiqueta("redes");

    expect(publicacion.etiquetas).toEqual(["redes"]);
  });

  test("una etiqueta vacía lanza el error esperado", () => {
    const ana = new Usuario("Ana", "ana@gmail.com");
    const publicacion = new Publicacion("Apuntes de Redes", "...", ana);

    expect(() => publicacion.agregarEtiqueta("   ")).toThrow("Etiqueta inválida");
  });

  test("tieneEtiqueta ignora mayúsculas y minúsculas", () => {
    const ana = new Usuario("Ana", "ana@gmail.com");
    const publicacion = new Publicacion("Apuntes de Redes", "...", ana);

    publicacion.agregarEtiqueta("Redes");

    expect(publicacion.tieneEtiqueta("redes")).toBe(true);
  });

  test("cada subclase arma su propio resumen", () => {
    const ana = new Usuario("Ana", "ana@gmail.com");
    const luis = new Usuario("Luis", "luis@gmail.com");
    const venta = new PublicacionVenta("Calculadora", "...", ana, 5000);
    const servicio = new PublicacionServicio("Clases de Álgebra", "...", luis, "virtual", 60);

    expect(venta.mostrarResumen()).toContain("$5000");
    expect(servicio.mostrarResumen()).toContain("Clases de Álgebra");
  });
});
