'use strict';

const { task, series, watch, src, dest } = require('gulp');

const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const autoPrefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const stripCssComments = require('gulp-strip-css-comments');

sass.compiler = require('node-sass');

task('main', async function() {
    src('src/cute.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([
        mqpacker(),
        autoPrefixer()
        ]))
        .pipe(rename('cute.css'))
        .pipe(stripCssComments())
        .pipe(dest('./dist/css'));
});
task('main-min', async function() {
    src('src/cute.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(postcss([
            mqpacker(),
            autoPrefixer()
        ]))
        .pipe(sourcemaps.write())
        .pipe(rename('cute.min.css'))
        .pipe(dest('./dist/css'))
});

task('static', async function() {
    src('src/cute.static.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([
            mqpacker(),
            autoPrefixer()
        ]))
        .pipe(rename('cute.static.css'))
        .pipe(stripCssComments())
        .pipe(dest('./dist/css'))
});
task('static-min', async function() {
    src('src/cute.static.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(postcss([
            mqpacker(),
            autoPrefixer()
        ]))
        .pipe(sourcemaps.write())
        .pipe(rename('cute.static.min.css'))
        .pipe(dest('./dist/css'))
});

task('build', series(
    'main', 'main-min',
    'static', 'static-min'
));

task('watch', function() {
    watch('src/*.scss', series('build'));
});