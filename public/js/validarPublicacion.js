import { Publicacion } from "./Publicacion";
import { Reglas } from "./reglas";
function validarPublicacion(publicacion, reglas){
    titulo = publicacion.obtenertitulo()
    min = reglas.obtenerMin()
    max = reglas.obenerMax()
    ret = false
    if (publicacion != null)
        if(titulo.lenght<maximo && titulo.lenght>min)
            ret = true
    return ret
}