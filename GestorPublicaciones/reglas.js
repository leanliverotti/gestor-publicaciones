export class Reglas {
    constructor(minTitulo,maxTitulo) {
        this.maxTitulo = maxTitulo
        this.minTitulo = minTitulo
    }
    obtenerMax = ()=>{
        return this.maxTitulo
    }
    obtenerMin = () =>{
        return this.minTitulo
    }
}