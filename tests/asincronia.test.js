import { Publicacion } from "../public/js/Publicacion.js";
import { Usuario } from "../public/js/usuario.js";

describe("Publicacion.revisar", () => {
  test("aprueba la publicación cuando el servicio resuelve aprobado", async () => {
    const servicio = { evaluar: async () => "aprobado" };
    const ana = new Usuario("Ana", "ana@gmail.com");
    const publicacion = new Publicacion("Apuntes de Redes", "...", ana);

    await expect(publicacion.revisar(servicio)).resolves.toBe("aprobada");
    expect(publicacion.estado).toBe("aprobada");
  });

  test("rechaza la publicación cuando el servicio resuelve rechazado", async () => {
    const servicio = { evaluar: async () => "rechazado" };
    const ana = new Usuario("Ana", "ana@gmail.com");
    const publicacion = new Publicacion("Apuntes de Redes", "...", ana);

    await expect(publicacion.revisar(servicio)).resolves.toBe("rechazada");
  });

  test("conserva el estado pendiente si el servicio falla", async () => {
    const servicio = {
      evaluar: async () => {
        throw new Error("Servicio no disponible");
      },
    };
    const ana = new Usuario("Ana", "ana@gmail.com");
    const publicacion = new Publicacion("Apuntes de Redes", "...", ana);

    await expect(publicacion.revisar(servicio)).rejects.toThrow("Servicio no disponible");
    expect(publicacion.estado).toBe("pendiente");
  });
});
