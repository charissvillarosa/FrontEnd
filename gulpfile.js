// Include gulp
var gulp = require('gulp');

// Include plugins
var sass = require('gulp-ruby-sass');
var uglify = require('gulp-uglify');
var replace = require('gulp-replace');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var concat = require('gulp-concat');
var util = require('gulp-util');
var callback = require('gulp-callback');
var debug = require('gulp-debug');
var sourcemaps = require('gulp-sourcemaps');
var duration = require('gulp-duration');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');


var jslibs = [
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/lodash/dist/lodash.min.js',
    'bower_components/angular/angular.min.js',
    'bower_components/angular-route/angular-route.min.js',
    'bower_components/angular-bootstrap/ui-bootstrap.min.js',
    'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
    'bower_components/bootstrap/dist/js/bootstrap.min.js'
];

var jsComponents = [].concat(jslibs, ['components/**/*.js', 'controller.js']);

// Concatenate JS Files
gulp.task('scripts', function() {
    gulp.src(jsComponents, {base: '.'})
        .pipe(concat('main.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./'));
});

// Concatenate SASS Files
gulp.task('sass', function() {
    sass('scss/main.scss', {style: 'compressed'})
        .pipe(concat('main.css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./'));
});


// Watch Files
gulp.task('watch', function() {
    gulp.watch(['components/**/*.js', 'controller.js'], ['scripts']); // Watch .js files
    gulp.watch(['components/**/*.scss'], ['sass']); // Watch .scss files
});

// Default Task
gulp.task('default', ['scripts', 'sass', 'watch']);

