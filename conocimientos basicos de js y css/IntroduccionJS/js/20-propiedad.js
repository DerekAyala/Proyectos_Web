//metodos de propiedad
const reproductor = {
    reproducir: function(id){
        console.log(`Reproducionedo Cancion ${id}`);
    },
    pausar: function(){
        console.log("Pausando");
    },
    crearPlaylist: function(nombre){
        console.log(`creando la playlist: ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`reproduciendo la playlist: ${nombre}`);
    }
}

reproductor.borrarCancion = function(id){
    console.log(`Eliminando la cancion ${id}`)
}

console.log(reproductor.reproducir(3840));

console.log(reproductor.pausar());

console.log(reproductor.borrarCancion(20));

console.log(reproductor.crearPlaylist("Ayuda esto no es un meme"))

console.log(reproductor.reproducirPlaylist("Ayuda esto no es un meme"))