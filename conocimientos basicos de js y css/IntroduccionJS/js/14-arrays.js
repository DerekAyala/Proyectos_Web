//ARREGLOS

const numeros = [10,20,30,40,50];

// console.log(numeros);


const meses = new Array('Enero','Febrero','Marzo','Abril','Mayo');

// console.log(meses);
// console.table(meses); //mostrar en una tabla

//puedes mezclar datos dentro de estas

//acceder a los datos de un arreglo

// console.log(numeros[4])

//conocer la extension de una arreglo

//console.log(meses.length)

//iterando numeros
/*
numeros.forEach( function(numero){
    console.log(numero);
})
*/

//METODOS
//agregar
numeros[5] = 60;//modificar

numeros.push(70 , 80);//agregar

numeros.unshift(0)//agregar al principio


numeros.pop();//elimina el ultimo elemento

numeros.shift();//elimina el primer elemento

numeros.splice(6,1); //elimina por posicion y cantidad

console.table(numeros); //mostrar en una tabla

//reest operator o spread operator

const nuevoArreglo = [...meses,'junio'];

console.log(nuevoArreglo);