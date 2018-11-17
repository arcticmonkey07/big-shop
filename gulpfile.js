"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var svgstore = require("gulp-svgstore");
var posthtml = require("gulp-posthtml");
var rename = require("gulp-rename");
var server = require("browser-sync").create();

// Препроцессор, автопрефиксер, минификация CSS
gulp.task("style", function() {
  gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("source/css"))
    .pipe(server.stream());
});

// posthtml для вставки спрайта в разметку html-страниц, а также минификация кода html-страницы
gulp.task("html", function() {
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest("source"));
});

// Сервер Browser Sync
gulp.task("serve", ["style"], function() {
  server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  /**************************/
  /* СЛЕДИМ ЗА ИЗМЕНЕНИЯМИ  */
  /**************************/
  // Следим за изменениями less-файлов
  gulp.watch("source/sass/**/*.scss", ["style"]);
    // Следим за изменениями html-страничек
  gulp.watch("source/*.html").on("change", server.reload);
  
});