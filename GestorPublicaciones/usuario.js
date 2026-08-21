export class Usuario { 
  constructor(nombre, email){
    this.nombre = nombre;
    this.email = email;
    this.fechaRegistro = new Date();
  }

  mostrarPerfil(){
   return `este es el perfin de ${this.nombre}, su correo es ${this.email}` 
  }

  obtenerNombre(){
    return this.nombre
  }
}
