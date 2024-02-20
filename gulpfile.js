const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const connect = require('gulp-connect'); // Runs a local webserver
const open = require('gulp-open'); // Opens a URL in a web browser
const { series } = require('gulp');

// Compile SCSS into CSS
function style() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}

// Serve files and open in browser
function serve() {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });

  // Launch Chrome web browser
  return gulp.src('./')
    .pipe(open({ uri: 'http://localhost:8080' }));
}

// Watch for changes in files
function watchFiles() {
  gulp.watch('./scss/**/*.scss', style);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

// Default task
exports.default = series(style, serve, watchFiles);
