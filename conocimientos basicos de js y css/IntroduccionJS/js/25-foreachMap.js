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

//foreach
//para mostrar los elementos
carrito.forEach(carrito => {
    console.log(`Una vez por cada elemento ${carrito.nombre}`);
});

//map
//llenar otro nuevo arreglo
carrito.map(carrito => {
    console.log(`Una vez por cada elemento ${carrito.precio}`);
});


