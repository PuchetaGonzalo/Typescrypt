abstract class SuperClase{ 

    abstract metodo1():void

    abstract saludo():void

}

class ClaseHijo extends SuperClase { 
    constructor(){
        super()
    }
    metodo1():void {
        console.log("Lanzando metodo1")
    }
    saludo():void {
        console.log("Lanzando saludos")
    }
}