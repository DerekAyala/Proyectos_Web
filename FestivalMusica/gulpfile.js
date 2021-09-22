const { series , parallel , src , dest , watch} = require('gulp');

const sass = require('gulp-sass');

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

function watchArchivos(){
    watch("./src/scss/app.scss", css);
}

exports.watchArchivos = watchArchivos;

exports.css = css;
exports.minificarCSS = minificarCSS;


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