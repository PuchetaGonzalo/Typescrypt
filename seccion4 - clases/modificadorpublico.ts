class Animal {
    public nombre: string
    public peso: number

    public constructor(_nombre: string, _peso: number) {
        this.nombre = _nombre;
        this.peso = _peso;
    }
    public moverse():void {
        console.log("Me estoy moviendo")
    }
}


const obj = new Animal("Serpiente",38);

obj.moverse();