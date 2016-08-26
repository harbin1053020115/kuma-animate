var path = require('path'),
    gulp = require('gulp'),
    less = require('gulp-less');

var sourcePath = 'src';

console.log(path.join(__dirname, sourcePath));

gulp.task('less', function(){
    return gulp.src(sourcePath + '/*.less')
        .pipe(less({
            paths: [path.join(__dirname, sourcePath)],
            cleancss: true,
            compress: false,
            ieCompat: true
        }))
        .pipe(gulp.dest(sourcePath));
});

gulp.task('watch', function(){
    gulp.watch(sourcePath + '/*.less', ['less']);
});
