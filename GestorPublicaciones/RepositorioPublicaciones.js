export class RepositorioPublicaciones {
    constructor() {
        this.publicaciones = []
    }
    agregar(publicacion) {
        this.publicaciones.push(publicacion)
    }

    buscarPorUsuario(nombre){
        const encontrado = this.publicaciones.filter((publicacion) => {
            return publicacion.esDeAutor(nombre)
        }
        )
        return encontrado[0]
    }
}
