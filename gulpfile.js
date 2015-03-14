var gulp = require('gulp'),
    gwebpack = require('gulp-webpack'),
    nodemon = require('gulp-nodemon'),
    path = require('path'),
    webpack = require('webpack'),
    sass = require('gulp-sass'),
    util = require('gulp-util');


gulp.task('copy', function() {

    gulp.src(['./assets/js/**/*']).pipe(gulp.dest('dist/js'));
    gulp.src(['./assets/images/**/*']).pipe(gulp.dest('dist/assets/images'));
    gulp.src(['./assets/fonts/**/*']).pipe(gulp.dest('dist/assets/fonts'));

});

gulp.task('main-styles', function() {
    gulp.src('./assets/stylesheets/ratchet.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/assets/stylesheets'));
});

gulp.task('theme-styles', function() {
    //change this to switch themes
    gulp.src('./assets/stylesheets/theme-'+ (util.env.theme? util.env.theme : 'ios') + '.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/assets/stylesheets'));
});

gulp.task('nodemon', function() {
    return nodemon({
        script: 'server.js',
        ext: 'js jsx css less',
        nodeArgs: ['--harmony'],
        ignore: ['./dist/**'],
        env: {'DEBUG': '*'}
    }).on('change',['build']);
});

gulp.task('pack', function() {
    return gulp.src('./client.js')
        .pipe(gwebpack({
            resolve: {
                extensions: ['', '.js', '.jsx']
            },
            output: {
                path: __dirname + '/dist/js',
                filename: 'client.js'
            },
            module: {
                loaders: [
                    {test: /\.css$/, loader: 'style!css'},
                    {test: /\.jsx$/, loader: 'jsx-loader?harmony'}
                ]
            },
            plugins: []
        }))
        .pipe(gulp.dest('dist/js/'));
});

gulp.task("default", ["main-styles", "theme-styles", "copy", "pack", "nodemon"]);
gulp.task("build", ["main-styles", "theme-styles", "copy", "pack"]);