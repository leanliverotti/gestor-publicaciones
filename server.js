import express from "express"; 
import path from "node:path"; 
import { fileURLToPath } from "node:url"; 
 
const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const publicacionesDeEjemplo = [
  {
    id: 101,
    titulo: "Apuntes de Algebra",
    descripcion: "Completos, con ejercicios resueltos de la cursada 2025.",
    autorNombre: "Sofia",
    autorEmail: "sofia@gmail.com",
    activa: true,
    destacado: false,
    tipo: "venta",
    precio: 4500,
    stock: 2,
  },
  {
    id: 102,
    titulo: "Clases particulares de JavaScript",
    descripcion: "Online, una hora, nivel inicial e intermedio.",
    autorNombre: "Leandro",
    autorEmail: "leandro@gmail.com",
    activa: true,
    destacado: true,
    tipo: "servicio",
    modalidad: "virtual",
    duracionMinutos: 60,
  },
  {
    id: 103,
    titulo: "Vendo calculadora cientifica",
    descripcion: "Casio fx-82, usada un cuatrimestre, funciona perfecto.",
    autorNombre: "Martin",
    autorEmail: "martin@gmail.com",
    activa: false,
    destacado: false,
    tipo: "venta",
    precio: 8000,
    stock: 1,
  },
];

app.use(express.static(path.join(__dirname, "public")));

// Simula un servidor que tarda en responder y que puede fallar a pedido
// (agregando ?error=1) para poder probar la recuperacion desde el cliente.
app.get("/api/publicaciones", (req, res) => {
  setTimeout(() => {
    if (req.query.error === "1") {
      res.status(500).json({ mensaje: "Error simulado por el servidor" });
      return;
    }
    res.json(publicacionesDeEjemplo);
  }, 600);
});

app.listen(3000, () => {
  console.log("Gestor en http://localhost:3000"); 
}); 