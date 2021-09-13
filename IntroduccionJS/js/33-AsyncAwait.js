//Async / await

function descargarNuevosClientes(){
    return new Promise( resolve =>{
        console.log('Descargando cliente... espere...');

        setTimeout(function(){
            resolve('Los Clientes fueron descargados')
        },5000);

    })
}

function descargarUltimosPedidos(){
    return new Promise( resolve =>{
        console.log('Descargando pedidos... espere...');

        setTimeout(function(){
            resolve('Los Pedidos fueron descargados')
        },3000);

    })
}

async function app(){
    try {
        /*
        const resultado = await descargarNuevosClientes();
        const resultad2 = await descargarUltimosPedidos();
        console.log(resultado)
        console.log(resultad2)
        */
        const resultado = await Promise.all([descargarNuevosClientes(),descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error)
    }
}
app();

/*
async function app2(){
    try {
        const resultado = await descargarUltimosPedidos();
        console.log(resultado)
        console.log('app lista');
    } catch (error) {
        console.log(error)
    }
}
app2();
*/
console.log('Este codigo no se bloquea');