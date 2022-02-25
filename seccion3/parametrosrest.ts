const cartadepostres = (postre:string, ...frutas:string[]):void => {
    console.log(`El postre es ${postre} y tienes ${frutas}`)


    cartadepostres("postre1","naranja"," manzana"," banana")
}


console.log(cartadepostres())