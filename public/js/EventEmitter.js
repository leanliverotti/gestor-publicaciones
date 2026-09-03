// EventEmitter minimo con la misma API que el de Node (on / off / emit).
// Existe porque "node:events" no se puede importar desde el navegador:
// el modulo no resuelve y se cae toda la pagina.

export class EventEmitter {
  constructor() {
    this.oyentes = new Map();
  }

  // Registra un callback para un evento. Guarda la referencia tal cual llega,
  // asi despues se puede quitar con off().
  on(evento, callback) {
    if (!this.oyentes.has(evento)) {
      this.oyentes.set(evento, []);
    }
    this.oyentes.get(evento).push(callback);
    return this;
  }

  // Quita un callback. Solo funciona si se pasa la MISMA referencia que se uso en on().
  off(evento, callback) {
    const registrados = this.oyentes.get(evento);
    if (!registrados) return this;

    this.oyentes.set(
      evento,
      registrados.filter((registrado) => registrado !== callback)
    );
    return this;
  }

  // Dispara el evento. Devuelve true si habia al menos un oyente escuchando.
  emit(evento, ...datos) {
    const registrados = this.oyentes.get(evento);
    if (!registrados || registrados.length === 0) return false;

    registrados.forEach((callback) => callback(...datos));
    return true;
  }
}
