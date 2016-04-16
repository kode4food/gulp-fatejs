"use strict";

const fatejs = require('../index');

const gulp = require('gulp');
const beautify = require('gulp-beautify');
const rename = require('gulp-rename');

const fateFiles = ['src/**/*.fate'];
const destDir = './dest';

gulp.task('test', function () {
  return gulp.src(fateFiles)
             .pipe(fatejs())
             .pipe(beautify({indentSize: 2}))
             .pipe(rename(function (path) {
                path.extname = ".js";
              }))
             .pipe(gulp.dest(destDir));
});

gulp.task('default', ['test']);
