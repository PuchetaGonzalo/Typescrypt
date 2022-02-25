class Persona<T> {
    nombre: string;
    edad: T

    mostrar:(dato:T)=>T
}


const obj = new Persona()