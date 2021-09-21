"use strict" //correr JS en modo estricto

const producto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

// Object.freeze(producto);//no te permite eliminar ni agregar ni cambiar valores
Object.seal(producto);//si te permite modificar las propiedades existentes
//producto.imagen = 'imagen.jpg';

// console.log(Object.isFrozen(producto));//comprobar si esta bloqueado
console.log(Object.isSealed(producto));

console.log(producto);