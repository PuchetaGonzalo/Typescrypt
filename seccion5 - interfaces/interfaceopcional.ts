interface Persona { 
    altura: number
    peso: number
    nombre?: string

}


let persona = {altura: 2,peso: 120,nombre:"jose"}

function MostrarMediaPeso(persona:Persona):string {
    let mediapeso:number = persona.altura / persona.peso 
    if(persona.nombre){
        return `${persona.nombre} tiene una media de ${mediapeso}`
    }else{
        return `Este sujeto anonimo tiene una media de ${mediapeso}`
    }
}

console.log(MostrarMediaPeso(persona))