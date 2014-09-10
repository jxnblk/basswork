
var gulp = require('gulp');
var mincss = require('gulp-minify-css');
var rename = require('gulp-rename');
var rework = require('gulp-rework');

var rimport = require('rework-npm');
var rvars = require('rework-vars');
var rcalc = require('rework-calc');
var rmedia = require('rework-custom-media');
// var rmath = require('rework-math');
// autoprefixer
// color functions

var browserify = require('gulp-browserify');

gulp.task('default', function() {
  gulp.src('./src/index.css')
    .pipe(rework( rimport(), rmedia(), rvars(), rcalc ))
    .pipe(rename('build.css'))
    .pipe(gulp.dest('./assets'))
    .pipe(rename('build.min.css'))
    .pipe(mincss())
    .pipe(gulp.dest('./assets'));
});

gulp.task('js', function() {
  gulp.src('src/app.js')
    .pipe(browserify())
    .pipe(gulp.dest('./assets'));
});
