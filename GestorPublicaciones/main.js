import { Publicacion } from "./Publicacion.js";

// Parte 3 - Instanciar y recorrer
const publicaciones = [
  new Publicacion(
    "Vendo apuntes de Algebra",
    "Apuntes completos de la cursada 2025, con ejercicios resueltos.",
    "Leandro"
  ),
  new Publicacion(
    "Busco companiero de grupo para Laboratorio",
    "Necesito un integrante mas para el TP del hilo conductor.",
    "Sofia"
  ),
  new Publicacion(
    "Ofrezco clases particulares de JavaScript",
    "Clases online, una hora, nivel inicial e intermedio.",
    "Leandro"
  ),
  new Publicacion(
    "Vendo calculadora cientifica",
    "Casio fx-82, usada un cuatrimestre, funciona perfecto.",
    "Martin"
  ),
];

// Un caso con activa = false editando el atributo despues de crear el objeto
publicaciones[3].activa = false;

// Actividad 1: agregar una quinta publicacion y bajarla antes de imprimirla
const quinta = new Publicacion(
  "Regalo libros de Analisis Matematico",
  "Tres libros en buen estado, retirar por la facultad.",
  "Sofia"
);
quinta.activa = false;
publicaciones.push(quinta);

// Recorrido: resumen + si esta activa o no
console.log("=== Listado de publicaciones ===");
publicaciones.forEach((p, i) => {
  console.log(`${i + 1}. ${p.mostrarResumen()} | ${p.estaActiva() ? "ACTIVA" : "INACTIVA"}`);
});

// Actividad 2: contar cuantas publicaciones estan activas
const cantidadActivas = publicaciones.filter((p) => p.estaActiva()).length;
console.log(`\nPublicaciones activas: ${cantidadActivas} de ${publicaciones.length}`);

// Lo mismo con un for clasico (para comparar)
let contador = 0;
for (let i = 0; i < publicaciones.length; i++) {
  if (publicaciones[i].estaActiva()) contador++;
}
console.log(`Publicaciones activas (for clasico): ${contador}`);

// Actividad 3: imprimir solamente los titulos de las publicaciones activas
console.log("\n=== Titulos de las publicaciones activas ===");
publicaciones
  .filter((p) => p.estaActiva())
  .forEach((p) => console.log(`- ${p.titulo}`));

// VERIFICACION: cambiar el titulo de una publicacion despues de creada
console.log("\n=== Verificacion: cada objeto usa sus propios datos ===");
publicaciones[0].titulo = "Vendo apuntes de Algebra (TITULO MODIFICADO)";
console.log(publicaciones[0].mostrarResumen());
console.log(publicaciones[1].mostrarResumen());

// Desafio opcional: filtrar todas las publicaciones de un mismo autor
console.log("\n=== Publicaciones de Leandro ===");
publicaciones
  .filter((p) => p.esDeAutor("Leandro"))
  .forEach((p) => console.log(`- ${p.titulo}`));

// Parte 4 - Serializar a JSON
console.log("\n=== JSON ===");
const publicacionesJSON = JSON.stringify(publicaciones, null, 2);
console.log(publicacionesJSON);


const luis = new usuario ("luis", "[EMAIL_ADDRESS]");
const ana = new usuario ("ana", "[EMAIL_ADDRESS]");
const lucho = new usuario ("lucho", "[EMAIL_ADDRESS]");

const publuis = new Publicacion("Vendo apuntes de Algebra", "Apuntes completos de la cursada 2025, con ejercicios resueltos.",luis);
const pubana = new Publicacion("Busco companiero de grupo para Laboratorio", "Necesito un integrante mas para el TP del hilo conductor.", ana);
const publucho = new Publicacion("Ofrezco clases particulares de JavaScript", "Clases online, una hora, nivel inicial e intermedio.", lucho);
const pubana2 = new Publicacion ("Vendo apuntes de Algebra", "Apuntes completos de la cursada 2025, con ejercicios resueltos.", ana);
