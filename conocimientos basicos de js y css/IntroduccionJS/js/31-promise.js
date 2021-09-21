const usuarioAuttenticado = new Promise( (resolve,reject) => {
    const auth = true;

    if (auth){
        resolve('Usuario autenticado'); //el promise se cumple
    } else {
        reject('N ose pudo iniciar sesion');   //no se cumple
    }
});

console.log(usuarioAuttenticado);
usuarioAuttenticado
.then((resultado) => {
    console.log(resultado)
})
.catch((error) =>{
    console.log(error);
});

// en los promises existen 3 valores
// Pending : no se ha cumplido pero tampoco se ha rechazado
// Fulflilled: ya se cumplio
// Rejected: Se ha rechazado