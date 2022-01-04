//const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const { watch, series, parallel, src, dest, gulp } = require('gulp');
const connect = require('gulp-connect'); // Runs a local webserver
const open = require('gulp-open'); // Opens a URL in a web browser
const exec = require('child_process').exec; // run command-line programs from gulp
const execSync = require('child_process').execSync; // command-line reports
// compile scss into css
// function style(){
//  // 1. where is my scss location
//   return gulp.src('./scss/**/*.scss')
//  // 2. pass that file throuugh sass compiler
//  .pipe(sass().on('error',sass.logError))
//  // 3. where we save compiled css 
//  .pipe(gulp.dest('./css')) 
 
//  // 4. stream changes to all browsers
//    .pipe(browserSync.stream())
// }

// function watch(){
//   browserSync.init({
//     server: {
//       baseDir: "./",
//     },
//   });

// Launch Chrome web browser
  // https://www.npmjs.com/package/gulp-open
  function openBrowser(done) {
    var options = {
      uri: "http://localhost:8080",
    };
    return src("./").pipe(open(options));
    done();
  }

  // Gulp plugin to run a webserver (with LiveReload)
  // https://www.npmjs.com/package/gulp-connect
  function server(done) {
    return connect.server({
      root: "./",
      port: 8080,
      debug: true,
    });
    done();
  }

// Commit and push files to Git
function git(done) {
    return exec('git add . && git commit -m "netlify deploy" && git push');
    done();
}

// Watch for netlify deployment
function netlify(done) {
    return new Promise(function(resolve, reject) {
        console.log(execSync('netlify watch').toString());
        resolve();
    });
}

// Preview Deployment
function netlifyOpen(done) {
    return exec('netlify open:site');
    done();
}
  // Deploy command
exports.deploy = series(git, netlify, netlifyOpen);
  // Default Gulp command
  exports.default = series(openBrowser, server);


 //  gulp.watch("./scss/**/*.scss", style);
  // gulp.watch("./*.html").on("change", browserSync.reload);
  // gulp.watch("./js/**/*.js").on("change", browserSync.reload);
//}



//exports.style = style;
//exports.watch = watch;

