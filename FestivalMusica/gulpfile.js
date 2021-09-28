const { series , parallel , src , dest , watch} = require('gulp');

const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
// funcion que compila sass

const paths = {
    imagenes: './src/img/**/*',
    scss: "./src/scss/**/*.scss"
}
function css(){
    return src(paths.scss)
        .pipe( sass({
            outputStyle: 'expanded' //compresed
        }) )
        .pipe( dest('./build/css') )
}

function minificarCSS(){
    return src(paths.scss)
        .pipe( sass({
            outputStyle: 'compressed' //compresed
        }) )
        .pipe( dest('./build/css') )
}

function imagenes(){
    return src(paths.imagenes)
        .pipe( imagemin() )
        .pipe( dest( './build/img' ))
        .pipe( notify({ message: 'Imagen Minificada'}) );
}

function versionWebp(){
    return src(paths.imagenes)
        .pipe(webp())
        .pipe( dest( './build/img'))
        .pipe(notify({ message: 'Version Wep lista'}));
}

function watchArchivos(){
    watch(paths.scss, css); // * = carpeta actual  **/* = varias carpetas
}



exports.css = css;
exports.minificarCSS = minificarCSS;
exports.watchArchivos = watchArchivos;
exports.imagenes = imagenes;

exports.default = series( css , imagenes , versionWebp ,watchArchivos);
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