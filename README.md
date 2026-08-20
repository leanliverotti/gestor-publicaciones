# LDAW - Gestor de Publicaciones

Trabajo practico de **7512 - Laboratorio de Desarrollo de Aplicaciones Web**.

Aplicacion del hilo conductor de la cursada: un **gestor de publicaciones de una
comunidad estudiantil** (avisos de "vendo apuntes", "busco companiero de grupo",
"ofrezco clases particulares"). Crece semana a semana.

## Integrantes

- Lean
- Alexis
- Angel

## Estado

**Semana 1 - Dia 1:** primera clase del sistema (`Publicacion`) en Node.js.

## Como correrlo

Requiere Node.js instalado.

```bash
cd GestorPublicaciones
node hola.js
node main.js
```

## Estructura

```
.
├── 1er.txt                     Actividad inicial en equipo (objetos cotidianos)
└── GestorPublicaciones/
    ├── package.json            "type": "module" para usar import/export
    ├── hola.js                 Parte 1 - Node.js desde cero
    ├── Publicacion.js          Parte 2 - La clase Publicacion
    ├── main.js                 Partes 3 y 4 - Instanciar, recorrer y serializar a JSON
    └── respuestas.md           Preguntas "Para pensar" y autoevaluacion
```

## Checklist de entrega - Semana 1

- [x] `Publicacion.js` con atributos, constructor y metodos (`mostrarResumen`, `estaActiva`)
- [x] `main.js` con 5 instancias y recorrido con `forEach`
- [x] Las 3 actividades de manipulacion resueltas
- [x] Salida de `JSON.stringify()` en consola
- [x] Respuestas a las dos preguntas "Para pensar" (`respuestas.md`)
- [x] Desafio opcional: metodo `esDeAutor(nombre)`
