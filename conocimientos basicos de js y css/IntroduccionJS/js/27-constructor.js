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

console.log(producto2);
console.log(producto3);