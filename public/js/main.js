import { Usuario } from "./usuario.js";
import { PublicacionVenta } from "./publicacionVenta.js";
import { PublicacionServicio } from "./publicacionServicio.js";
import { RepositorioPublicaciones } from "./RepositorioPublicaciones.js";

/*
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




const luis = new Usuario("luis", "luis@gmail.com");
const ana = new Usuario("ana", "ana@gmail.com");
const lucho = new Usuario("lucho", "lucho@gmail.com");

const publuis = new Publicacion("Vendo apuntes de Algebra", "Apuntes completos de la cursada 2025, con ejercicios resueltos.", luis);
const pubana = new Publicacion("Busco companiero de grupo para Laboratorio", "Necesito un integrante mas para el TP del hilo conductor.", ana);
const publucho = new Publicacion("Ofrezco clases particulares de JavaScript", "Clases online, una hora, nivel inicial e intermedio.", lucho);
const pubana2 = new Publicacion("Vendo apuntes de Algebra", "Apuntes completos de la cursada 2025, con ejercicios resueltos.", ana);

const listaPublicaciones = [publuis, pubana, publucho, pubana2];


listaPublicaciones.forEach((publicacion) => {
  console.log(publicacion.mostrarResumen());
});

const listaFiltrada = listaPublicaciones.filter((publicacion) => {
  return publicacion.estaActiva();
})
for (let index = 0; index < listaFiltrada.length; index++) {
  console.log(listaFiltrada[index].mostrarResumen());
}

const elementoFind = listaPublicaciones.find((publicacion) => {
  return publicacion.esDeAutor("ana")
})
console.log(elementoFind.mostrarResumen());

const repositorio = new RepositorioPublicaciones();
listaPublicaciones.forEach((publicacion) => repositorio.agregar(publicacion));

console.log(repositorio.buscarPorUsuario("luis"));
console.log(repositorio.buscarPorUsuario("ana"));
console.log(repositorio.buscarPorUsuario("lucho"));
*/


/*
const luis = new Usuario("luis", "luis@gmail.com");
const ana = new Usuario("ana", "ana@gmail.com");
const lucho = new Usuario("lucho", "lucho@gmail.com");

const publuis = new Publicacion("Vendo apuntes de Algebra", "Apuntes completos de la cursada 2025, con ejercicios resueltos.", luis);
const pubana = new Publicacion("Busco companiero de grupo para Laboratorio", "Necesito un integrante mas para el TP del hilo conductor.", ana);
const publucho = new PublicacionVenta("Ofrezco clases particulares de JavaScript", "Clases online, una hora, nivel inicial e intermedio.", lucho);
const pubana2 = new PublicacionServicio ("Vendo apuntes de Algebra", "Apuntes completos de la cursada 2025, con ejercicios resueltos.", ana);

const listaPublicaciones = [publuis, pubana, publucho, pubana2];

listaPublicaciones.forEach(p => {
  console.log(p.mostrarResumen())
});
*/

/* EJECUCION ASINCRONICA
const luis = new Usuario("luis", "luis@gmail.com");
const ana = new Usuario("ana", "ana@gmail.com");
const lucho = new Usuario("lucho", "lucho@gmail.com");

const publuis = new Publicacion("Vendo apuntes de Algebra", "Apuntes completos de la cursada 2025, con ejercicios resueltos.", luis);
const pubana = new Publicacion("Busco companiero de grupo para Laboratorio", "Necesito un integrante mas para el TP del hilo conductor.", ana);
const publucho = new publicacionVenta("Ofrezco clases particulares de JavaScript", "Clases online, una hora, nivel inicial e intermedio.", lucho);
const pubana2 = new publicacionServicio("Vendo apuntes de Algebra", "Apuntes completos de la cursada 2025, con ejercicios resueltos.", ana);

const listaPublicaciones = [publuis, pubana, publucho, pubana2];

const repositorio = new RepositorioPublicaciones();

repositorio.on("publicacion agregada", (Publicacion => {
  console.log(`nueva publicacion ${Publicacion.agregarResumen()}`)
}))

let contador = 0;
repositorio.on("publicacion agregada", () =>{
  contador++;
  console.log(`hay ${contador} publicaiones en total`)
})

repositorio.agregar(listaPublicaciones)

function publicarConDemora(publicacion, callback){
    setTimeout(() => {
        callback(`${publicacion} publicacion añadida`)
    }, 5000);
}

publicarConDemora(publuis, (mensaje) =>{
console.log(mensaje)
})
console.log("subiendo otra publicacion")
*/

/* EJECUCION SINCRONICA
const luis = new Usuario("luis", "luis@gmail.com");
const ana = new Usuario("ana", "ana@gmail.com");
const lucho = new Usuario("lucho", "lucho@gmail.com");

const publuis = new Publicacion("Vendo apuntes de Algebra", "Apuntes completos de la cursada 2025, con ejercicios resueltos.", luis);
const pubana = new Publicacion("Busco companiero de grupo para Laboratorio", "Necesito un integrante mas para el TP del hilo conductor.", ana);
const publucho = new publicacionVenta("Ofrezco clases particulares de JavaScript", "Clases online, una hora, nivel inicial e intermedio.", lucho);
const pubana2 = new publicacionServicio("Vendo apuntes de Algebra", "Apuntes completos de la cursada 2025, con ejercicios resueltos.", ana);

const listaPublicaciones = [publuis, pubana, publucho, pubana2];

const repositorio = new RepositorioPublicaciones();

repositorio.on("publicacion agregada", (Publicacion => {
  console.log(`nueva publicacion ${Publicacion.agregarResumen()}`)
}))

let contador = 0;
repositorio.on("publicacion agregada", () =>{
  contador++;
  console.log(`hay ${contador} publicaiones en total`)
})

repositorio.agregar(listaPublicaciones)

function publicarSinDemora(publicacion){
  return new Promise((resolve) =>{
    setTimeout(() => {
        resolve(`${publicacion} publicacion añadida`)
    }, 5000);
  })
}

async function publicacionSincronica(publuis) {
  const mensaje = await publicarSinDemora(publuis)
  console.log(mensaje)
   console.log("subiendo otra publicacion")
}

publicacionSincronica()
*/

const vistaPrevia = document.getElementById("vista-previa")
const camposEspecificos = document.getElementById("campos-especificos")
const tipo = document.getElementById("tipo")
const ayudaEmail = document.getElementById("ayuda-email")

function observarEvento(evento) {
  console.table({
    type: evento.type,
    target: evento.target.id,
    currentTarget: evento.currentTarget.id,
    timeStamp: Math.round(evento.timeStamp)
  });
}
titulo.addEventListener("input", observarEvento);
tipo.addEventListener("change", observarEvento);

function actualizarVistaPrevia() {
  const nombre = autor.value || "Autor";
  const texto = titulo.value || "Sin título";
  vistaPrevia.textContent = `${texto} — ${nombre} (${tipo.value})`;
}
titulo.addEventListener("input", actualizarVistaPrevia);
autor.addEventListener("input", actualizarVistaPrevia);
tipo.addEventListener("change", actualizarVistaPrevia);

function actualizarCamposEspecificos() {
  if (tipo.value === "venta") {
    camposEspecificos.innerHTML = `
      <input id="precio" type="number" placeholder="Precio" required min="0">
      <input id="stock" type="number" value="1" required min="0">`;
  } else {
    camposEspecificos.innerHTML = `
      <select id="modalidad">
        <option>presencial</option><option>virtual</option>
      </select>
      <input id="duracion" type="number" placeholder="Minutos" required min="0">`;
  }
}
tipo.addEventListener("change", actualizarCamposEspecificos);
actualizarCamposEspecificos();

function mostrarAyudaEmail() {
  ayudaEmail.textContent = "Usá un email válido del autor";
}
function ocultarAyudaEmail() { ayudaEmail.textContent = ""; }
email.addEventListener("focus", mostrarAyudaEmail);
email.addEventListener("blur", ocultarAyudaEmail);

const formulario = document.getElementById("form-publicacion");
const lista = document.getElementById("lista-publicaciones");

// Las publicaciones viven en el repositorio del dominio, no en un array suelto de la vista.
const repositorio = new RepositorioPublicaciones();

function crearPublicacionDesdeFormulario() {
  const usuario = new Usuario(autor.value, email.value);

  if (tipo.value === "venta") {
    return new PublicacionVenta(
      titulo.value, descripcion.value, usuario,
      Number(document.querySelector("#precio").value),
      Number(document.querySelector("#stock").value)
    );
  }
  return new PublicacionServicio(
    titulo.value, descripcion.value, usuario,
    document.querySelector("#modalidad").value,
    Number(document.querySelector("#duracion").value)
  );
}

function renderizarPublicaciones() {
  lista.innerHTML = "";
  repositorio.listar().forEach((publicacion) => {
    const tarjeta = document.createElement("article");
    tarjeta.dataset.id = publicacion.id;

    const resumen = document.createElement("p");
    resumen.textContent = publicacion.mostrarResumen();

    const estado = document.createElement("span");
    estado.textContent = publicacion.estaActiva() ? "Activa" : "Inactiva";
    if (publicacion.destacado) estado.textContent += " - Destacada";

    // El mismo boton alterna entre destacar() y opacar() segun el estado del objeto.
    const botonDestacar = document.createElement("button");
    botonDestacar.dataset.accion = publicacion.destacado ? "opacar" : "destacar";
    botonDestacar.textContent = publicacion.destacado ? "Quitar destacado" : "Destacar";

    const botonBaja = document.createElement("button");
    botonBaja.dataset.accion = "baja";
    botonBaja.textContent = "Dar de baja";
    botonBaja.disabled = !publicacion.estaActiva();

    tarjeta.append(resumen, estado, botonDestacar, botonBaja);
    lista.appendChild(tarjeta);
  });
}

function manejarAccion(evento) {
  const boton = evento.target.closest("button[data-accion]");
  if (!boton || !lista.contains(boton)) return;

  const tarjeta = boton.closest("[data-id]");
  const id = Number(tarjeta.dataset.id);
  const publicacion = repositorio.buscarPorId(id);
  if (!publicacion) return;

  const accion = boton.dataset.accion;
  if (accion === "baja") publicacion.darDeBaja();
  if (accion === "destacar") publicacion.destacar();
  if (accion === "opacar") publicacion.opacar();

  renderizarPublicaciones();
}
lista.addEventListener("click", manejarAccion);

function manejarEnvio(evento) {
  evento.preventDefault();
  const publicacion = crearPublicacionDesdeFormulario();
  repositorio.agregar(publicacion);
  renderizarPublicaciones();
  formulario.reset();
  actualizarCamposEspecificos();
  actualizarVistaPrevia();
}
formulario.addEventListener("submit", manejarEnvio);

/* Parte 1 - Observar la propagacion
function observarClick(evento) {
  console.log("target", evento.target);
  console.log("currentTarget", evento.currentTarget);
}
lista.addEventListener("click", observarClick);

// Clic en la tarjeta (article): target = el article (o el elemento exacto tocado), currentTarget = lista.
// Clic en el texto (p/span): target = ese elemento de texto, currentTarget sigue siendo lista.
// Clic en el boton: target = el button, currentTarget sigue siendo lista.
// Lo que CAMBIA es target (el elemento real donde se origino el clic).
// Lo que se MANTIENE igual es currentTarget (el elemento donde esta enganchado el listener, "lista").

lista.removeEventListener("click", observarClick);
// Al remover con la misma referencia de funcion, los clics dejan de loguearse en consola.
// Esto solo funciona porque observarClick es una funcion con nombre guardada en una variable;
// una arrow function anonima no se podria remover asi.
*/

/* Parte 6 - Decidir sobre la propagacion
function avisarTarjeta(evento) {
  console.log("listener de la tarjeta, currentTarget:", evento.currentTarget);
}
function pruebaStopPropagation(evento) {
  evento.stopPropagation();
  console.log("click en boton individual, propagacion detenida");
}

// Hay que engancharlo DESPUES de cada render: renderizarPublicaciones() borra y
// recrea las tarjetas, asi que correrlo al cargar la pagina no engancha nada
// (en ese momento la lista todavia esta vacia).
function engancharPruebaPropagacion() {
  lista.querySelectorAll("article").forEach((tarjeta) => {
    tarjeta.addEventListener("click", avisarTarjeta);
  });
  lista.querySelectorAll("button[data-accion]").forEach((boton) => {
    boton.addEventListener("click", pruebaStopPropagation);
  });
}

// Con stopPropagation() en el boton, el evento nunca burbujea hasta "lista", asi que
// manejarAccion() (el listener delegado) no se ejecuta para ese clic: destacar/dar de baja dejan de funcionar.
// Por eso se retira despues de probarlo: la delegacion necesita que el evento burbujee libremente.
*/

// Parte 7 - Depuracion (tres problemas encontrados en el codigo de ejemplo)
// 1) lista.addEventListener("click", manejarAccion());
//    Ejecucion inmediata: los parentesis llaman a manejarAccion() en el momento (con evento undefined)
//    y lo que se registra como listener es su valor de retorno (undefined), no la funcion.
//    Correccion: lista.addEventListener("click", manejarAccion);
//
// 2) lista.addEventListener("click", evento => manejarAccion(evento));
//    Registro duplicado: si se ejecuta junto con otra linea que tambien registra el click en "lista",
//    queda mas de un listener escuchando el mismo evento y manejarAccion se dispara varias veces por clic.
//
// 3) lista.removeEventListener("click", evento => manejarAccion(evento));
//    Referencia distinta: cada "evento => manejarAccion(evento)" crea una funcion anonima nueva.
//    removeEventListener solo saca un listener si recibe la MISMA referencia usada en addEventListener,
//    y esta no lo es, asi que no elimina nada. Para poder quitarlo despues hay que guardar la funcion
//    en una variable y pasar esa misma referencia tanto a addEventListener como a removeEventListener.

// Autoevaluacion de cierre
// - Cuando usaria preventDefault(): cuando quiero manejar el submit del formulario con JS
//   (crear la publicacion, validar datos, etc.) sin que el navegador recargue la pagina ni cambie la URL.
// - Diferencia entre target y currentTarget: target es el elemento exacto donde el usuario hizo clic
//   (puede ser un hijo interno, como el texto o el boton); currentTarget es el elemento donde esta
//   enganchado el listener que se esta ejecutando (aca, siempre "lista", gracias a la delegacion).
// - Por que la delegacion resiste un nuevo render: el listener esta registrado una sola vez en "lista",
//   que nunca se destruye. Aunque renderizarPublicaciones() borre y recree las tarjetas de adentro
//   (lista.innerHTML = ""), los clics en los elementos nuevos igual burbujean hasta "lista",
//   asi que no hace falta volver a registrar el listener despues de cada render.