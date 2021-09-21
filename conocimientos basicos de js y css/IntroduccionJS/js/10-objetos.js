//OBJETOS   
const producto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

//modificar objetos
//agregar
producto.imagen = 'imagen.jpg'

//eliminar
delete producto.disponible;


console.log(producto);
console.log(producto.precio);
