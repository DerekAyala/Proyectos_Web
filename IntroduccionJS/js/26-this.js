// This

const reservacion = {
    nombre: 'Juan',
    apellido: 'De la torre',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} ${this.apellido} debe un total de ${this.total}`);
    }
};

reservacion.informacion();

