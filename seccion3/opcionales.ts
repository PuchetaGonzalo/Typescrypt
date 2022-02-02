const opcionales = (nombre: string, apellido: string, edad?:number) => {
    if(!edad){
        console.log(`se llama ${nombre} su apellido es ${apellido}`)
    }
    else if (edad){
        console.log(`se llama ${nombre} su apellido es ${apellido} y su edad es ${edad}`)
    }
}

opcionales("Juan", "Rodriguez")

