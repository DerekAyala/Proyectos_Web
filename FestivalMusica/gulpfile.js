const { series , parallel , src , dest , watch} = require('gulp');

const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');
 //utilidades css
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

//utilidades js
const terser = require('gulp-terser-js');
const rename = require('gulp-rename');

const paths = {
    imagenes: './src/img/**/*',
    scss: "./src/scss/**/*.scss",
    js: 'src/js/**/*.js'
}
function css(){
    return src(paths.scss)
        .pipe( sourcemaps.init() )
        .pipe( sass({
            // outputStyle: 'expanded' //compresed
        }) )
        .pipe( postcss( [autoprefixer(), cssnano()] ))
        .pipe( sourcemaps.write('.') )
        .pipe( dest('./build/css') )
}

function javascript(){
    return src(paths.js)
        .pipe( sourcemaps.init() )
        .pipe( concat('bundle.js'))
        .pipe(terser() )
        .pipe( sourcemaps.write('.') )
        .pipe( rename({ suffix:'.min'}))
        .pipe( dest('./build/js') )
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
    watch(paths.js, javascript)
}



exports.css = css;
exports.watchArchivos = watchArchivos;
exports.imagenes = imagenes;

exports.default = series( css , javascript, imagenes , versionWebp ,watchArchivos);
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