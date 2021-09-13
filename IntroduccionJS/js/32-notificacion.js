const boton = document.querySelector("#boton");

boton.addEventListener('click',function(){
    Notification.requestPermission()
    .then(resultado => console.log(`El resultado es ${resultado}`));
});

if(Notification.permission =='granted'){
    new Notification('esta es una notificacion',{
        
    })
}