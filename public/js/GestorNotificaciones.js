// No conoce NotificadorWeb ni NotificadorEmail: solo confia en que el objeto
// que recibe tiene un metodo notificar(mensaje). Cualquier canal nuevo que
// cumpla ese contrato funciona aca sin tocar esta clase.
export class GestorNotificaciones {
  enviar(notificador, mensaje) {
    return notificador.notificar(mensaje);
  }
}
