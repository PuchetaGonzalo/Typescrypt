interface Personas<T> { 
    nombre: T
}

let objeto: Personas<string> = {nombre: "Manuel"} 
let numeros: Personas<number> = {nombre:34}