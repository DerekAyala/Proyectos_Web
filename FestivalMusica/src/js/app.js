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