import { Publicacion } from "./Publicacion.js";

export class PublicacionServicio extends Publicacion{
    constructor(titulo, descripcion, autor, modalidad, duracionMinutos){
        super(titulo, descripcion, autor)
        this.modalidad = modalidad;
        this.duracionMinutos = duracionMinutos;
    }
    mostrarResumen() {
        const base = super.mostrarResumen();
        return `${base} - ${this.modalidad} -${this.duracionMinutos}`;
    }
}