document.addEventListener('DOMContentLoaded', function(){
    scrollNav();
});

function scrollNav(){
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach(function(enlace){
        enlace.addEventListener('click', function(e){
            e.preventDefault();
            // console.log(e.target.attributes.href.value);

    
            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior:'smooth'
            });
        });
    });
}
document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();

});

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');

    for( let i = 1 ; i <= 12 ; i++){
        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId = i;
        // añadir la funcion de mostrar Imagen
        imagen.onclick =mostrarImagen;
        const lista = document.createElement('LI');
        lista.appendChild(imagen);
        galeria.appendChild(lista);
    }
}

function mostrarImagen(e){
    const id = parseInt(e.target.dataset.imagenId);
    //generar la imagen
    const imagen = document.createElement('IMG');
    imagen.src = `build/img/grande/${id}.webp`;
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    //dar click en el overlay para cerrar
    overlay.onclick = function() {
        overlay.remove();
        body.classList.remove('fijar-body');
    }
    // Boton para cerrar la imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent= 'X';
    cerrarImagen.classList.add('btn-cerrar');
    //cerrar imagen
    cerrarImagen.onclick = function(){
        overlay.remove();
        body.classList.remove('fijar-body');
    }
    overlay.appendChild(cerrarImagen);
    //mostrar en el html
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}