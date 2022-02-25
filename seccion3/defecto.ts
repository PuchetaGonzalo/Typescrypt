// parametros por defecto 


const mostrar = (nombre:string,apellidos:string,edad:number = 32) => {   
    return `Se llama ${nombre} su apellido es ${apellidos} y tiene ${edad} años` 

}
console.log(mostrar("mario","robledo",37))
console.log(mostrar("mia","paz",27))



