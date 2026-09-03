import { Publicacion } from "./Publicacion.js";

export class PublicacionDonacion extends Publicacion {
    constructor(titulo, descripcion, autor, motivoDonacion) {
        super(titulo, descripcion, autor)
        this.motivoDonacion = motivoDonacion;
    }
}
