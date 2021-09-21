function sumar(n1 , n2) {
    return n1 + n2;
}

console.log(sumar(3,4));

let total = 0;

function agregarCarrito(precio){
    return total +=precio;
}

total = agregarCarrito(200);

total = agregarCarrito(1000);

function calcularImpuesto(total){
    return total * 1.15;
}

console.log(`total a pagar con impuestos$${calcularImpuesto(total)}`);