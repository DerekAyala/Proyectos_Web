class Producto{
    constructor(nombre , precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto(){
        return `${this.nombre} tiene un precio de ${this.precio}`;
    }
}

const producto2 = new Producto('Monitor Curvo de 49"',800);
const producto3 = new Producto('laptop"',500);

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());

//Herencia
class Libro extends Producto{
    constructor(nombre , precio , isbn){
        super(nombre , precio);
        this.isbn = isbn;
    }
    formatearProducto(){
        return `${super.formatearProducto()} y su isbn es ${this.isbn}`;
    }
}

const libro = new Libro('JavaScript',120,'56156165');

console.log(libro.formatearProducto());