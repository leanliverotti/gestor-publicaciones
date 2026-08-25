import { Publicacion } from "./Publicacion.js";

export class publicacionServicio extends Publicacion{
    constructor(titulo, descripcion, autor, modalidad, duracionMinutos){
        super(titulo, descripcion, autor)
        this.modalidad = modalidad;
        this.duracionMinutos = duracionMinutos;
    }
}