import { Publicacion } from "./Publicacion.js";

export class PublicacionVenta extends Publicacion{
    constructor(titulo, descripcion, autor, precio, stock = 1){
        super(titulo, descripcion, autor);
        this.precio = precio;
        this.stock = stock;
    }
    mostrarResumen() {
    const base = super.mostrarResumen();
    return `${base} -$${this.precio} (stock: ${this.stock})`;
}
}
