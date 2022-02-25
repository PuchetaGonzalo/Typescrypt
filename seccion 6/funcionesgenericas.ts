function mostrar(dato: number): number {
    return dato
}

console.log(mostrar(34));


function mostrargenerico <T>(dato:T):T {
    return dato
}
const d = mostrargenerico("manuel")

console.log(mostrargenerico(true));