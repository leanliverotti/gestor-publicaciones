export class publicacionDonacion extends publicacion {
    constructor(titulo, descripcion, autor, motivoDonacion) {
        super(titulo, descripcion, autor)
        this.motivoDonacion = motivoDonacion;
    }
}