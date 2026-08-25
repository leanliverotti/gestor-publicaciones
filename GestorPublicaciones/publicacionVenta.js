import { Publicacion } from "./Publicacion.js";

export class publicacionVenta extends Publicacion{
    constructor(titulo, descripcion, autor, precio){
        super(titulo, descripcion, autor);
        this.precio = precio;
        this.stock = 1;
    }
}
