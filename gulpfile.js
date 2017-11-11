const gulp = require('gulp')
const sass = require('gulp-sass')
const fs = require('fs')
const path = require('path')

gulp.task('sass', () => {
  return (
    gulp.src(['./static/styles/*.sass'])
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./static/'))
  )
})

gulp.task('sass:watch', () => {
  gulp.watch('./static/styles/', ['sass'])
})