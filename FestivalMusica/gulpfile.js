const { series , parallel , src , dest , watch} = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const notfy = require('gulp-notify');
const { notify } = require('node-notifier');
// funcion que compila sass

function css(){
    return src("./src/scss/app.scss")
        .pipe( sass({
            outputStyle: 'expanded' //compresed
        }) )
        .pipe( dest('./build/css') )
}

function minificarCSS(){
    return src("./src/scss/app.scss")
        .pipe( sass({
            outputStyle: 'compressed' //compresed
        }) )
        .pipe( dest('./build/css') )
}

function imagenes(){
    return src('./src/img/**/*').pipe( imagemin()).pipe(dest('./build/img' )).pipe( notify({message: 'Imagenes Mninifada'}))
}

function watchArchivos(){
    watch("./src/scss/**/*.scss", css); // * = carpeta actual  **/* = varias carpetas
}



exports.css = css;
exports.minificarCSS = minificarCSS;
exports.watchArchivos = watchArchivos;
exports.imagenes = imagenes;
/*
function hola(done){
    console.log('Hola mundo en Gulp');
    done()
}

function javascript(done){
    console.log('compilando javascript');
    done()
}

function css(done){
    console.log('compilando css');
    done()
}

exports.javascript = javascript;
exports.hola = hola;

exports.default = series(hola , javascript , css);
exports.default = parallel(hola , javascript , css);
*/