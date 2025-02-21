const gulp = require("gulp");
const sass = require("sass");
const gulpSass = require("gulp-sass");
const sourceMaps = require("gulp-sourcemaps");
const gulpWebpack = require("webpack-stream");
const plumber = require("gulp-plumber");
const autoprefixer = require("gulp-autoprefixer");
const livereload = require("gulp-livereload");

const scss = gulpSass(sass);

//
// ---- BUILD FOLDERS

const BUILD_FOLDER = "./dist/";
const JS_FOLDER = BUILD_FOLDER + "js/";
const CSS_FOLDER = BUILD_FOLDER + "css/";

//
// ---- SRC FOLDERS

const SRC_JS_FOLDER = "./src/js/*.js";
const SRC_SCSS_FOLDER = "./src/scss/*.scss";
const SRC_HTML_FOLDER = "./src/*.html";

//
// ---- MAIN COMMAND

gulp.task("default", gulp.series(copyHtml, copyScss, copyJs, watcher));

//
// ---- OPTIONS COMMAND

gulp.task("html", gulp.series(copyHtml, watcher));
gulp.task("js", gulp.series(copyJs, watcher));
gulp.task("sass", gulp.series(copyScss, watcher));

//
// ---- FUNCTIONS

// -- WATCHER

async function watcher() {
  gulp.watch(SRC_HTML_FOLDER, copyHtml);
  gulp.watch(SRC_SCSS_FOLDER, copyScss);
  gulp.watch(SRC_JS_FOLDER, copyJs);
}

// -- PIPE

async function copyHtml() {
  return gulp.src(SRC_HTML_FOLDER).pipe(gulp.dest(BUILD_FOLDER));
}

async function copyJs() {
  return gulp
    .src(SRC_JS_FOLDER)
    .pipe(plumber())
    .pipe(
      gulpWebpack({
        mode: "production",
        module: {
          rules: [
            {
              use: {
                loader: "babel-loader",
                options: {
                  presets: ["@babel/preset-env"],
                },
              },
            },
          ],
        },
        output: {
          filename: "build.min.js",
        },
      })
    )
    .pipe(gulp.dest(JS_FOLDER));
}

async function copyScss() {
  return gulp
    .src(SRC_SCSS_FOLDER)
    .pipe(plumber())
    .pipe(sourceMaps.init())
    .pipe(scss({ style: "compressed" }))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(sourceMaps.write("./"))
    .pipe(gulp.dest(CSS_FOLDER))
    .pipe(livereload());
}
