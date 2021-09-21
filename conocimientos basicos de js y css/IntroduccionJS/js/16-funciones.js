//declaracion de una funcion'
//hoisting
sumar()
function  sumar(){
    console.log(10*10);
}


//expresion de una funcion
const sumar2 = function() {
    console.log(3*3);
}

sumar2();

//IIFE son buenos para proteger los datos 

(function(){
    console.log("Esto es una funcion")
})();

console.log(Cliente);