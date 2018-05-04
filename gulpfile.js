const gulp = require('gulp');
const path = require('path');
const clean = require('gulp-clean');
const run = require('gulp-run-command').default;

gulp.task('dependencies', () => {
    return gulp
        .src('./src/dependencies/**/*')
        .pipe(gulp.dest('build'))
});

gulp.task('build', ['clean', 'dependencies'], run('g++ -g ./src/main.cpp -o ./build/app'));

gulp.task('clean', () => {
    return gulp
        .src('build/*', {read: false})
        .pipe(clean());
});

gulp.task('watch', function () {
    gulp.watch('src/**/*.*', ['clean', 'build']);
});