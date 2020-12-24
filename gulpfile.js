const gulp = require('gulp');
const sass = require('gulp-sass');
const header = require('gulp-header');
const footer = require('gulp-footer');
const rename = require('gulp-rename');

sass.compiler = require('dart-sass');

gulp.task('build', () => {
  return gulp.src('./style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(header('<style>\n'))
    .pipe(footer('\n</style>'))
    .pipe(rename('style.html'))
    .pipe(gulp.dest('./'));
});