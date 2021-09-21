//array methods

const meses = new Array('Enero','Febrero','Marzo','Abril','Mayo');

const carrito = [
    {nombre: 'Monitor 20 pulgadas' , precio: 500 },
    {nombre: 'Television 50 pulgadas' , precio: 700 },
    {nombre: 'Tablet' , precio: 300 },
    {nombre: 'Audifonos' , precio: 200 },
    {nombre: 'Teclado' , precio: 50 },
    {nombre: 'Celular' , precio: 500 },
    {nombre: 'Bocinas' , precio: 300 },
    {nombre: 'Laptop' , precio: 800 }
];

// forEach

meses.forEach(function(mes){
    if(mes == 'Marzo'){
        console.log("Marzo si existe");
    }
});

//includes

let resultado = meses.includes("Marzo") //ideal para arrays simples
console.log(resultado);

//some ideal para arreglo de objetos
/*
resultado = carrito.some(function(producto){
    return producto.nombre == "Celular"
})
*/
//forma mas corta
resultado = carrito.some(producto => producto.nombre == "Celular");

console.log(resultado)

//Reduce

// resultado = carrito.reduce(function(total,producto){
//     return total + producto.precio
// }, 0);

//forma corta
resultado = carrito.reduce((total,producto) => total + producto.precio, 0);

console.log(resultado)

//FILTER

// resultado = carrito.filter(function(producto){
//     return producto.precio > 400
// });

//FORMA CORTA
resultado = carrito.filter(producto => producto.precio > 400);

console.log(resultado)





