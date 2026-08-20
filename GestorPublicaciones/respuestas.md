# Semana 1 - Dia 1 - Respuestas

## Parte 1 - Que devuelve `typeof window` aca?

Devuelve `"undefined"`. En Node.js no existe el objeto `window`: ese objeto lo aporta
el navegador y representa la ventana/pestania donde vive la pagina (DOM, eventos, etc.).
Node corre JavaScript fuera del navegador, sobre el motor V8, y su objeto global se llama
`globalThis` (historicamente `global`). Si el mismo codigo corriera en la consola del
navegador, `typeof window` devolveria `"object"`, porque ahi el entorno si define `window`.

Otra diferencia: Node ejecuta el script y termina; el navegador mantiene la pagina "viva"
esperando eventos del usuario.

## Parte 4 - Que pasa con los metodos al convertir el objeto a JSON?

Los metodos (`mostrarResumen`, `estaActiva`, `esDeAutor`) **no aparecen** en el JSON.
Dos razones:

1. JSON es un formato de **datos**, no de codigo: solo soporta strings, numeros, booleanos,
   null, arrays y objetos. Una funcion no tiene representacion en JSON, asi que
   `JSON.stringify()` la ignora.
2. Ademas, los metodos de una clase no viven en cada objeto sino en el **prototipo**
   (`Publicacion.prototype`), y `JSON.stringify()` solo serializa las propiedades propias
   del objeto (las que se asignan en el constructor: titulo, descripcion, autor,
   fechaPublicacion, activa).

Se ve tambien que `fechaPublicacion`, que es un `Date`, se guarda como string ISO
(`"2026-08-20T20:08:40.680Z"`). Al volver a leer ese JSON habria que reconstruir tanto la
fecha como los objetos `Publicacion` para recuperar sus metodos.

## Autoevaluacion

**Que le pasaria a mi codigo si maniana necesito agregar un atributo `categoria`?**
Alcanza con tocar un solo lugar: agregar el parametro al `constructor` de `Publicacion.js`
y asignar `this.categoria`. Todas las instancias nuevas lo tienen automaticamente. Habria
que revisar las llamadas `new Publicacion(...)` de `main.js` para pasarle el valor (o darle
un valor por defecto, ej. `categoria = "general"`, para no romper el codigo existente).
Esa es la ventaja de tener la definicion centralizada en la clase.

**En que parte de mi clase se ve el encapsulamiento?**
En que la clase agrupa datos + comportamiento en una sola unidad: los metodos
`mostrarResumen()` y `estaActiva()` acceden a los atributos con `this` y son la forma
"oficial" de consultarlos, sin que quien usa la clase tenga que saber como estan guardados
por dentro. Hoy el encapsulamiento es debil porque los atributos son publicos
(`p.activa = false` se puede hacer desde afuera); mas adelante se podria reforzar con
campos privados (`#activa`) y metodos como `desactivar()`.

**Que me quedo menos claro?**
La diferencia entre modulos ES (`import`/`export`) y CommonJS (`require`), y por que hace
falta `"type": "module"` en el package.json para que Node acepte `import`.
