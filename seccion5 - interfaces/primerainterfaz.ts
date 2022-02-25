interface Personas { 
    //Atribustos 
    nombre: string
    apellido: string
}


function caminar (personas: Personas):void {
    console.log("La persona " + personas.nombre+" esta caminando");
}

let nueva_persona = {nombre:"Manuel", apellido:"Ruiz", edad:34, altura:1.97}

caminar(nueva_persona)