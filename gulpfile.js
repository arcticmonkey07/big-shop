"use strict";

var gulp = require("gulp");
var del = require("del");
var htmlmin = require("gulp-htmlmin");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var minify = require("gulp-csso");
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var posthtml = require("gulp-posthtml");
var rename = require("gulp-rename");
var server = require("browser-sync").create();
var run = require("run-sequence");

gulp.task("clean", function () {
  return del("build");
});

gulp.task("copy", function () {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/**"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
});

gulp.task("htmlmin", function () {
  return gulp.src('source/*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('build'));
})

gulp.task("style", function () {
  gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("script", function () {
  return gulp.src("source/js/*.js")
    .pipe(uglify())
    .pipe(concat("main.min.js"))
    .pipe(gulp.dest("build/js"));
});

gulp.task("serve", function() {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("source/js/*.js", ["style"]);
  gulp.watch("source/*.html", ["htmlmin"]).on("change", server.reload);
});

gulp.task("build", function () {
  run("clean", "copy", "htmlmin", "style", "script");
});
