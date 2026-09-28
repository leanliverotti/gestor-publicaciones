const estado = document.querySelector("#estado");
const formulario = document.querySelector("#pedido");
const salida = document.querySelector("#salida");
const lista = document.querySelector("#lista-publicaciones");
const crudo = document.querySelector("#crudo");

async function consultar(ruta) {
  estado.textContent = "Consultando...";
  try {
    const respuesta = await fetch(ruta);
    if (!respuesta.ok) throw new Error("La respuesta no fue exitosa");
    estado.textContent = await respuesta.text();
  } catch (error) {
    estado.textContent = `No se pudo consultar el estado: ${error.message}`;
  }
}

function mostrarDiagnostico(publicaciones) {
  lista.replaceChildren(...publicaciones.map((publicacion) => {
    const item = document.createElement("li");
    item.textContent = `${publicacion.id}. ${publicacion.titulo} - ${publicacion.autor}`;
    return item;
  }));
}

async function cargarPublicaciones() {
  const respuesta = await fetch("/publicaciones");
  mostrarDiagnostico(await respuesta.json());
}

document.querySelector("#consultar").addEventListener("click", () => consultar("/estado-comunidad"));
document.querySelector("#consultar-inactivas").addEventListener("click", () => consultar("/estado-inactivas"));

formulario.addEventListener("submit", async (evento) => {
  evento.preventDefault();
  try {
    const respuesta = await fetch(formulario.action, { method: formulario.method, headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams(new FormData(formulario)) });
    salida.textContent = await respuesta.text();
    salida.dataset.tipo = respuesta.ok ? "exito" : "error";
    if (respuesta.ok) {
      formulario.reset();
      await cargarPublicaciones();
    }
  } catch (error) {
    salida.textContent = error.message;
    salida.dataset.tipo = "error";
  }
});

document.querySelector("#ver-json").addEventListener("click", async () => {
  const texto = await fetch("/datos/publicaciones.json").then((respuesta) => respuesta.text());
  crudo.textContent = texto;
  mostrarDiagnostico(JSON.parse(texto));
});

document.querySelector("#ver-xml").addEventListener("click", async () => {
  const texto = await fetch("/datos/publicaciones.xml").then((respuesta) => respuesta.text());
  crudo.textContent = texto;
  const xml = new DOMParser().parseFromString(texto, "application/xml");
  mostrarDiagnostico([...xml.querySelectorAll("publicacion")].map((nodo) => ({ id: Number(nodo.getAttribute("id")), autor: nodo.querySelector("autor").textContent, titulo: nodo.querySelector("titulo").textContent })));
});

cargarPublicaciones();
