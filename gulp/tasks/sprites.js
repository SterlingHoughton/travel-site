var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');

config = {
  mode: {
    css: {
      render: {
        css: {
          template: './gulp/templates/sprite.csste'
        }
      }
    }
  }
}

gulp.task('createSprite', function() {
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite/'));
});