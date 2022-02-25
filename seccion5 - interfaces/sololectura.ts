interface Sololectura { 
    readonly a: string
    readonly b: string
}


let sololectura:Sololectura = {a:"juan",b:"zanini"}
sololectura.a = "jose"

console.log(sololectura)