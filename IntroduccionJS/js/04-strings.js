//string o cadena de texto
const producto = "Monitor de 20 pulgadas\"";
const tweet = "Aprendiendo javascript con el curso de desarrollo web completo";
const producto2 = "Monitor HD";

//no se usan casi
/*
const producto2 = String("Monitor de 20 pulgadas");
const producto3 = new String("Monitor de 20 pulgadas");
*/

// length cantidad de caracteres
console.log(producto.length);

//indexof ubicar una palabra o caracter en la cadena retorna la posicion
console.log(tweet.indexOf('javascript'));
console.log(tweet.indexOf('hola')); //-1 es que no lo encontro

//include retorna true si se encuentra y false si no
console.log(tweet.includes('javascript'));
console.log(tweet.includes('hola'));

/*
console.log(typeof producto2);
console.log(typeof producto3);
*/