"use strict";

const cleanCSS = require("gulp-clean-css");
const concat = require("gulp-concat");
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");

function buildStyles() {
  return gulp.src([
    "./app/sass/mixins.scss",
    "./app/sass/colors.scss",
    "./app/sass/base.scss",
    "./app/sass/mixins.scss",
    "./app/sass/colors.scss",
    "./app/sass/**/*.scss",
    "./app/pages/**/*.scss",
    "./app/partials/**/*.scss"
  ])
    .pipe(sourcemaps.init())
    .pipe(concat("style.css"))
    .pipe(sass({}).on("error", sass.logError))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./public/css"));
}

function watch() {
  gulp.watch("./app/**/*.scss", buildStyles);
}

module.exports = {
  buildStyles,
  watch
};