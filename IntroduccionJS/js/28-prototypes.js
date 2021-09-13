// POO

/* Object Literal */
const producto = {
    nombre: 'Tablet',
    precio: 500
};

//object Constructor

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const producto2 = new Producto('Monitor Curvo de 49"',800);
const producto3 = new Producto('laptop"',500);

Producto.prototype.formatearProducto = function(){
    return `${this.nombre} tiene un precio de ${this.precio}`;
}

// function formatearProducto(producto){
//     return `${producto.nombre} tiene un precio de ${producto.precio}`;
// }


//crear funciones que solo se utilizan en un objeto en especifico 
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());

