import { expect, test } from "@jest/globals";
import { Publicacion } from "../src/Publicacion.js";
import { convertirAJSON, convertirAXML, convertirDesdeJSON, paraExponer } from "../src/formatos.js";

const publicacion = new Publicacion(1, "Ana & Cía", "Apuntes <avanzados>", "Descripción válida con suficientes caracteres.", "aviso");

test("JSON conserva el contrato público", () => {
  expect(convertirDesdeJSON(convertirAJSON([publicacion]))).toEqual([paraExponer(publicacion)]);
});

test("XML escapa caracteres reservados", () => {
  expect(convertirAXML([publicacion])).toContain("Ana &amp; Cía");
  expect(convertirAXML([publicacion])).toContain("&lt;avanzados&gt;");
});

test("colecciones vacías se serializan", () => {
  expect(convertirAJSON([])).toBe("[]");
  expect(convertirAXML([])).toContain("<publicaciones></publicaciones>");
});
