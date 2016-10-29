var gulp = require('gulp');
var less = require('gulp-less');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');


gulp.task('less',function(){
    return gulp.src('less/theme.less')
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less())
        .pipe(gulp.dest('css/'));
})

gulp.task('less:watch',function(){
    gulp.watch('less/**/*.less',['less']);
})

gulp.task('default',['less:watch']);

gulp.task('build',['less']);