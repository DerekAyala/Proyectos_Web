document.addEventListener('DOMContentLoaded', function(){
    scrollNav();
    navegacionFija();
});

function navegacionFija(){

    const bara = document.querySelector('.header');
    //registrar el intersection Observer
    const observer = new IntersectionObserver( function(entries){
        if(entries[0].isIntersecting){
            bara.classList.remove('fijo')
        }else{
            bara.classList.add('fijo')
        }
    })
    //elemento a observar
    observer.observe(document.querySelector('.sobre-festival'));

}

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