import { Publicacion } from "../public/js/Publicacion.js";
import { RepositorioPublicaciones } from "../public/js/RepositorioPublicaciones.js";
import { Usuario } from "../public/js/usuario.js";

describe("Reportes y moderación", () => {
  test("reportar registra el reporte y no altera requiereRevision con uno solo", () => {
    const ana = new Usuario("Ana", "ana@gmail.com");
    const luis = new Usuario("Luis", "luis@gmail.com");
    const publicacion = new Publicacion("Apuntes de Redes", "...", ana);

    publicacion.reportar(luis, "Contenido repetido");

    expect(publicacion.reportes).toHaveLength(1);
    expect(publicacion.requiereRevision()).toBe(false);
  });

  test("un mismo usuario no puede reportar dos veces la misma publicación", () => {
    const ana = new Usuario("Ana", "ana@gmail.com");
    const luis = new Usuario("Luis", "luis@gmail.com");
    const publicacion = new Publicacion("Apuntes de Redes", "...", ana);

    publicacion.reportar(luis, "Contenido repetido");

    expect(() => publicacion.reportar(luis, "Otro motivo")).toThrow(
      "El usuario ya reportó esta publicación"
    );
  });

  test("un motivo vacío lanza el error esperado", () => {
    const ana = new Usuario("Ana", "ana@gmail.com");
    const luis = new Usuario("Luis", "luis@gmail.com");
    const publicacion = new Publicacion("Apuntes de Redes", "...", ana);

    expect(() => publicacion.reportar(luis, "   ")).toThrow("Motivo inválido");
  });

  test("requiereRevision es true a partir de tres reportes de usuarios distintos", () => {
    const ana = new Usuario("Ana", "ana@gmail.com");
    const publicacion = new Publicacion("Apuntes de Redes", "...", ana);
    const reportantes = [
      new Usuario("Luis", "luis@gmail.com"),
      new Usuario("Sofia", "sofia@gmail.com"),
      new Usuario("Martin", "martin@gmail.com"),
    ];

    reportantes.forEach((usuario) => publicacion.reportar(usuario, "Contenido repetido"));

    expect(publicacion.requiereRevision()).toBe(true);
  });

  test("pendientesDeRevision devuelve solo publicaciones activas con tres reportes o más", () => {
    const ana = new Usuario("Ana", "ana@gmail.com");
    const repositorio = new RepositorioPublicaciones();

    const reportada = new Publicacion("Apuntes de Redes", "...", ana);
    [
      new Usuario("Luis", "luis@gmail.com"),
      new Usuario("Sofia", "sofia@gmail.com"),
      new Usuario("Martin", "martin@gmail.com"),
    ].forEach((usuario) => reportada.reportar(usuario, "Contenido repetido"));

    const conUnSoloReporte = new Publicacion("Clases de Álgebra", "...", ana);
    conUnSoloReporte.reportar(new Usuario("Luis", "luis@gmail.com"), "Motivo");

    const reportadaPeroDeBaja = new Publicacion("Vendo calculadora", "...", ana);
    [
      new Usuario("Luis", "luis@gmail.com"),
      new Usuario("Sofia", "sofia@gmail.com"),
      new Usuario("Martin", "martin@gmail.com"),
    ].forEach((usuario) => reportadaPeroDeBaja.reportar(usuario, "Contenido repetido"));
    reportadaPeroDeBaja.darDeBaja();

    repositorio.agregar(reportada);
    repositorio.agregar(conUnSoloReporte);
    repositorio.agregar(reportadaPeroDeBaja);

    expect(repositorio.pendientesDeRevision()).toEqual([reportada]);
  });
});
