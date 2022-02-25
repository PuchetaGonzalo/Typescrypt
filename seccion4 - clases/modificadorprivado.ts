class Animals {
    private nombre: string
    private peso: number

    public constructor(_nombre: string, _peso: number) {
        this.nombre = _nombre;
        this.peso = _peso;
    }
    public moverse():void {
        console.log("Me estoy moviendo")
    }
}


const objt = new Animals("Serpiente",38);

objt.moverse() 


class Conectar { 
    public url: string
}

const ob = new Conectar()
ob.url