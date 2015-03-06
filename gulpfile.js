var gulp = require('gulp'),
    gwebpack = require('gulp-webpack'),
    nodemon = require('gulp-nodemon'),
    less = require('gulp-less'),
    path = require('path'),
    LessPluginCleanCSS = require("less-plugin-clean-css"),
    webpack = require('webpack'),
    cleancss = new LessPluginCleanCSS({advanced: true}),
    sass = require('gulp-sass');

gulp.task('copy', function() {

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
    gulp.src('./assets/stylesheets/theme-ios.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/assets/stylesheets'));
});

gulp.task("less", function() {

    return gulp.src('./assets/stylesheets/ratchet-theme-ios.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')],
            plugins: [cleancss]
        }))
        .pipe(gulp.dest('./dist/assets/stylesheets'));
});

gulp.task('nodemon', function() {
    return nodemon({
        script: 'server.js',
        ext: 'js jsx css less',
        nodeArgs: ['--harmony'],
        env: {'DEBUG': '*'}
    }).on('restart');
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
            plugins: [
                new webpack.IgnorePlugin(new RegExp("models"))
            ]
        }))
        .pipe(gulp.dest('dist/js/'));
});

gulp.task("default", ["main-styles","theme-styles", "copy", "pack", "nodemon"]);
gulp.task("build", ["main-styles","theme-styles", "copy", "pack"]);