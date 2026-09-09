import { Usuario } from "./usuario.js";
import { PublicacionVenta } from "./publicacionVenta.js";
import { PublicacionServicio } from "./publicacionServicio.js";

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
const lista = document.getElementById("lista-publicaciones")
const botonActualizar = document.getElementById("botonActualizar")
const estadoActualizar = document.getElementById("estadoActualizar")
const errorTitulo = document.getElementById("errorTitulo")
const titulo = document.getElementById("titulo")
const autor = document.getElementById("autor")
const errorAutor = document.getElementById("errorAutor")
const 

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
  contador.textContent = contenido.value.length;
  vista.textContent = `${titulo.value || "Sin título"} — ` +
    `${autor.value || "..."} (${tipo.value})`;
} 
[titulo, autor, contenido, tipo].forEach(control => control.addEventListener("input", actualizarVistaPrevia));


function actualizarCamposEspecificos() {
  if (tipo.value === "venta") {
    camposEspecificos.innerHTML = `
      <input id="precio" type="number" placeholder="Precio">
      <span id="errorPrecio"></span>
      <input id="stock" type="number" value="1">`;
  } else {
    camposEspecificos.innerHTML = `
      <select id="modalidad">
        <option>presencial</option><option>virtual</option>
      </select>
      <input id="duracion" type="number" placeholder="Minutos">`;
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
const listaPublicaciones = document.getElementById("lista-publicaciones");
const publicaciones = [];

function crearPublicacionDesdeFormulario() {
  const usuario = new Usuario(autor.value, email.value);

  if (tipo.value === "venta") {
    return new PublicacionVenta(
      titulo.value, descripcion.value, usuario,
      Number(document.querySelector("#precio").value)
    );
  }
  return new PublicacionServicio(
    titulo.value, descripcion.value, usuario,
    document.querySelector("#modalidad").value,
    Number(document.querySelector("#duracion").value)
  );
}

function agregarTarjeta(publicacion, idTarjeta) {
  const tarjeta = document.createElement("article");
  tarjeta.dataset.id = idTarjeta
  tarjeta.className = "tarjeta-publicacion";

  const resumen = document.createElement("p");
  resumen.textContent = publicacion.mostrarResumen();

  const estado = document.createElement("span");
  estado.dataset.accion = "destacar"
  estado.textContent = "Activa";

  const boton = document.createElement("button");
  boton.dataset.accion = "baja"
  boton.textContent = "Dar de baja";

  const botonDestacar = document.createElement("button");
  botonDestacar.textContent = "destacar";

  function manejarBaja(evento) {
    console.log(evento.type, evento.target);
    publicacion.darDeBaja();
    estado.textContent = "Inactiva";
    boton.disabled = true;
  }

  function manejarDestacado() {
    publicacion.destacar();
  }

  tarjeta.append(resumen, estado, boton, botonDestacar);
  listaPublicaciones.appendChild(tarjeta);
}

async function manejarEnvio(evento) {
  evento.preventDefault();
  if (!validarTitulo(true)) return;
  enviar.disabled = true;
  estado.textContent = "Publicando...";
  try {
    await esperar(800);
    const publicacion = crearPublicacionDesdeFormulario();
    repositorio.agregar(publicacion);
    renderizarPublicaciones();
    estado.textContent = "Publicación agregada";
    formulario.reset();
    actualizarVistaPrevia();
  } catch (error) {
    estado.textContent = `Error: ${error.message}`;
  } finally {
    actualizarEstadoFormulario();
  }
}
formulario.addEventListener("submit", manejarEnvio);

function observarClick(evento) {
  console.log("target", evento.target);
  console.log("currentTarget", evento.currentTarget);
}
lista.addEventListener("click", observarClick)

function manejarAccion(evento) {
  const boton = evento.target.closest("button[data-accion]");
  if (!boton || !lista.contains(boton)) return;
  const tarjeta = boton.closest("[data-id]");
  const id = Number(tarjeta.dataset.id);
  console.log(id, boton.dataset.accion);
  if (boton.dataset.accion === "baja") publicaciones[id].darDeBaja();
  if (boton.dataset.accion === "destacar") publicaciones[id].destacar();
  renderizarPublicaciones();

}

lista.addEventListener("click", manejarAccion);

function esperar(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

console.log(esperar(1000).then( () => {
  console.log("promesa devuelta")
}))

async function cargarPublicaciones(forzarError = false) {
  estadoActualizar.textContent = "Cargando publicaciones...";
  botonActualizar.disabled = true;
  try {
    const url = forzarError ? "/api/publicaciones?error=1" : "/api/publicaciones";
    const respuesta = await fetch(url);
    if (!respuesta.ok) throw new Error("La respuesta no fue exitosa");
    const datos = await respuesta.json();
   // repositorio.cargarDesde(datos);
    renderizarPublicaciones();
    console.log(datos)
    estadoActualizar.textContent = `${datos.length} publicaciones recibidas`;
  } catch (error) {
    estadoActualizar.textContent = `Error: ${error.message}`;
  } finally {
    botonActualizar.disabled = false;
  }
}

function renderizarPublicaciones() {
  //iterar sobre las tarjetas de listaPublicaciones
  //cada tarjeta tiene un id --> asociar con el arreglo de publicaciones. id tarjeta == index publicaciones
  //si la publiacion esta activa entonces --> tarjeta.estado = "Activa" SINO tarjeta.estadp = "Inactiva"
  for (let tarjeta of listaPublicaciones.children) {
    console.log(tarjeta)
    const index = tarjeta.dataset.id
    const estado = tarjeta.querySelector("span")
    if(publicaciones[index].estaActiva()){
      estado.textContent = "activa"
    }else{
      estado.textContent = "inactiva"
    }
  }
}

botonActualizar.addEventListener("click", cargarPublicaciones)

function validarTitulo(mostrarError = true) {
  const valido = titulo.value.trim().length >= 5;
  titulo.classList.toggle("valido", valido);
  titulo.classList.toggle("invalido", !valido && mostrarError);
  errorTitulo.textContent = !valido && mostrarError
    ? "Ingrese al menos 5 caracteres" : "";
  return valido;
}
 
titulo.addEventListener("input", () => validarTitulo(false));
titulo.addEventListener("blur", () => validarTitulo(true));

function validarAutor(mostrarError = true){
  const valido = autor.value.trim().length >= 3;
  autor.classList.toggle("valido", valido);
  autor.classList.toggle("invalido", !valido && mostrarError);
  errorAutor.textContent = !valido && mostrarError
    ? "Ingrese al menos 3 caracteres" : "";
  return valido;
}

function validarPrecio(){
  const valido = autor.value.trim().length >= 3;
  precio.classList.toggle("valido", valido);
 precio.classList.toggle("invalido", !valido && mostrarError);
  errorprecio.textContent = !valido && mostrarError
    ? "Ingrese al menos 1 caracter" : "";
  return valido;
}

function formularioValido() {
  const precioValido = tipo.value !== "venta" || Number(precio.value) > 0;
  return titulo.value.trim().length >= 5
    && autor.value.trim().length >= 3
    && precioValido;
}
 
function actualizarEstadoFormulario() {
  enviar.disabled = !formularioValido();
}
 
formulario.addEventListener("input", actualizarEstadoFormulario);