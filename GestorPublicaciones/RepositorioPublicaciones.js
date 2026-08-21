import Publicacion from Publicacion.js;
class RepositorioPublicaciones {
    constructor(publicaciones) {
        this.publicaciones = [publicaciones]
    }
    agregar(Publicacion) {
        todasPublicaciones.push(Publicacion)
    }
    
    buscarPorUsuario(nombre){
        encontrado = publicaciones.filter((publicacion) => {
            return publicacion.esDeAutor(nombre)
        }
        )
        return encontrado[0]
    }
}



