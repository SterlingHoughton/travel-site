var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function() {
  console.log('gulp task!!');
});

gulp.task('watch', function() {
  watch('./app/index.html', function() {
    gulp.start('default');
  });
});

