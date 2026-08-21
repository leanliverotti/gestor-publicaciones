<<<<<<< HEAD
export class Usuario { 
=======
class usuario { 
>>>>>>> 425ae710257862b903be6cfecfe6dd6d0aea82bb
  constructor(nombre, email){
    this.nombre = nombre;
    this.email = email;
    this.fechaRegistro = new Date();
  }

  mostrarPerfil(){
   return `este es el perfin de ${this.nombre}, su correo es ${this.email}` 
  }
<<<<<<< HEAD

  obtenerNombre(){
    return this.nombre
  }
=======
>>>>>>> 425ae710257862b903be6cfecfe6dd6d0aea82bb
}
