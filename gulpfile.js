'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const autoPrefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');

sass.compiler = require('node-sass');

gulp.task('scss', async function() {
  gulp.src('src/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(postcss([
      mqpacker(),
      autoPrefixer()
    ]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css/'))
});

gulp.task('scss:watch', function() {
  gulp.watch('src/*.scss', gulp.series('scss'));
});
