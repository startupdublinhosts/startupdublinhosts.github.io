var gulp =        require('gulp'),
    sass =        require('gulp-sass'),
    minify =      require('gulp-minify-css'),
    rename =      require('gulp-rename'),
    fs =          require('fs'),
    prefixer =    require('gulp-autoprefixer')

gulp.task('css', function() {
  gulp.src('stylesheets/master.scss')
      .pipe(sass())
      .pipe(prefixer())
      .pipe(minify({ cache: true }))
      .pipe(gulp.dest('./css'))
})

gulp.task('watch', function() {
  gulp.watch('./stylesheets/*.scss', ['css'])
})

gulp.task('default', ['css'])
