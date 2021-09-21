
// querySelector se limita a uno solo
const heading = document.querySelector('#heading') //retorna 0 o 1 elemento
// console.log(heading);
heading.textContent = 'Nuevo Heading';

// QuerySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
// console.log(enlaces);
// console.log(enlaces[0]);

enlaces[0].textContent = 'Nuevo Texto para Enlace';
// enlaces[0].href = 'http//google.com';
//classList.add sirve para agregar clases
// .remove sirve para agregar clase

// getElementById

const heading2 = document.getElementById('heading');
// console.log(heading2);



/* Crear nuevos elementos */

const nuevoEnlace = document.createElement('A');

//agregar el href
nuevoEnlace.href= "nuevo-enlace.html";
//agregar texto
nuevoEnlace.textContent = 'Nuevo Enlace';
//agregar clase
nuevoEnlace.classList.add('navegacion__enlace');

//agregarlo al documento

const navegacion = document.querySelector('.navegacion');

navegacion.appendChild(nuevoEnlace);

// console.log(nuevoEnlace);

//eventos

console.log(1);

window.addEventListener('load', function(){ //espera a que el js y los archivos esten listos
    console.log(2);
})

window.onload = function(){
    console.log(3);
}

document.addEventListener('DOMContentLoaded',function(){ //no espera al js ni al css
    console.log(4);
})

console.log(5);

window.onscroll = function(){
    //console.log('GIRO')
}

//seleccionar elementos y asociarles un evento
/*
const btnEnviar = document.querySelector('.boton--primario');

btnEnviar.addEventListener('click',function(evento){
    evento.preventDefault();
    //validar un formulario
    console.log('Enviando datos');
})
*/



//Eventos de los inputs

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

/*
nombre.addEventListener('input', function(e){ //validacion en tiempo real
    console.log(e.target.value);
})
*/

nombre.addEventListener('input', leerTexto)

email.addEventListener('input', leerTexto);

mensaje.addEventListener('input', leerTexto);

//evento submit



formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    //validar el formulario

    const {nombre , email , mensaje} = datos;

    if ( nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligarios','error');
        return; //corta la ejecucion del codigo
    } 

    mostrarAlerta('Enviando formulario');
    
    /*
    console.log(nombre);
    console.log(email);
    console.log(mensaje);
    */
    //Enviar el formulario
})

function leerTexto(e){
    // console.log(e.target.value);

    datos[e.target.id] = e.target.value;
    // console.log(e.target);

    // console.log(datos);
}

//muestra un error en pantalla

function mostrarAlerta(mensaje , error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if (error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 5000);
}

/* estructura de codigo
    variables
    eventListener
    funciones
*/