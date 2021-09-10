const producto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

const precioProducto = producto.precio;
//const nombreProducto = producto.nombreProducto;

//destructuring
const {precio , nombreProducto}= producto;

console.log(precio);
console.log(nombreProducto);