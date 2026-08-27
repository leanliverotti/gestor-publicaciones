
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

    listaResumen = () => {
        this.publicaciones.map(publicaciones => publicaciones.mostrarResumen())
    }

    filtrarPorTipo(claseConstructor) {
        this.publicaciones.filter(publicaciones => publicaciones instanceof claseConstructor)
    }
}


