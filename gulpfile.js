/*
 * Define plugins
 */
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var babel = require("gulp-babel");
var webpack = require('webpack-stream');
var browserSync = require('browser-sync');

/*
 * Define paths
 */
var paths = {
	htmlFiles: 'client/*.html',
    jsFiles: 'client/app/js/*.js',
    cssFiles: 'client/app/css/*.css',
    distributionDirectory: 'dist'
};


gulp.task('compile-html', function () {
 $.util.log('Gulp.js:', $.util.colors.red('  concatenate HTML, gzip files and write files to destination folder'));
    $.util.beep();
    return gulp.src(paths.htmlFiles)
        .pipe($.plumber())
        .pipe(gulp.dest(paths.distributionDirectory));
});

gulp.task('compile-vendorJS', function () {
 $.util.log('Gulp.js:', $.util.colors.blue('  concatenate vendor js, gzip files and write files to destination folder'));
  //  $.util.beep();
    return gulp.src(['client/app/vendor/js/angular.min.js', 'client/app/vendor/js/jquery.min.js', 'client/app/vendor/js/*.js'])
        .pipe($.plumber())
        .pipe(concat('vendor.js'), {newLine: ';'})
        .pipe(gulp.dest(paths.distributionDirectory + "/vendor"));
});

gulp.task('compile-vendorCSS', function () {
    return gulp.src('client/app/vendor/css/**/*.scss')
    	.pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest(paths.distributionDirectory + "/vendor"));
});

gulp.task('compile-clientCSS', function () {
    return gulp.src(['client/app/**/*.scss', '!client/app/vendor/css/**/*.scss'])
    	.pipe(sass({outputStyle: 'compressed'}))
    	.pipe(concat('client.css'), {newLine: ';'})
        .pipe(gulp.dest(paths.distributionDirectory + "/public"))
        .pipe(browserSync.stream());
});



gulp.task('compile-clientJS', function () {
 $.util.log('Gulp.js:', $.util.colors.blue('  concatenate client js, gzip files and write files to destination folder'));
    $.util.beep();
    return gulp.src("client/app/index.module.js")
        .pipe($.plumber())
        .pipe(webpack( require('./webpack.config.js') ))
        .pipe(gulp.dest(paths.distributionDirectory + "/public"));
});

//gulp.task('js-watch', ['compile-clientJS'], browserSync.reload);
/*
 * Watchers
 */


/*
 * Serve files trough BrowserSync
 */
gulp.task('serve', ['compile-html', 'compile-vendorJS', 'compile-clientJS', 'compile-vendorCSS', 'compile-clientCSS'], function () {
    browserSync.create();

    
    browserSync.init({
        files: ['client/**/*'],
        proxy: "https://forms-dev.local"
    });
    gulp.watch('client/app/**/*.js',['compile-clientJS']);
    gulp.watch('client/app/**/*.html',['compile-clientJS']);
    gulp.watch('client/app/**/*.scss', ['compile-clientCSS']);
});