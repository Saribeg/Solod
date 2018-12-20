'use strict';

let gulp = require('gulp'),
    babel = require('gulp-babel'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    fileInclude = require('gulp-file-include'),
    cleancss = require('gulp-clean-css'),
    clean = require('gulp-clean'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    browserSync = require("browser-sync"),
    ejs = require("gulp-ejs"),
    runSequence = require('run-sequence'),
    minifyejs = require('gulp-minify-ejs'),
    reload = browserSync.reload;

let path = {
    build: {
        html: 'build',
        js: 'build/js/',
        jsWhite: 'build/js/white',
        css: 'build/css/',
        img: 'build/img/',
        imgWhite: 'build/white-img/',
        fonts: 'build/fonts/'
    },
    src: {
        ejs: 'src/templates/**/*.html.ejs',
        js: 'src/js/*.js',
        jsWhite: 'src/js/white/*.js',
        style: 'src/style/**/*.scss',
        styleWhite: 'src/style-white/**/*.scss',
        img: 'src/img/**/*.*',
        imgWhite: 'src/white-img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    watch: {
        ejs: 'src/templates/**/*.ejs',
        js: 'src/js/*.js',
        jsMod: 'src/js/modules/*.js',
        jsWhite: 'src/js/white/*.js',
        style: 'src/style/**/*.scss',
        styleWhite: 'src/style-white/**/*.scss',
        img: 'src/img/**/*.*',
        imgWhite: 'src/white-img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: 'build/'
};

let config = {
    server: {
        baseDir: "build"
    },
};

gulp.task('ejs:build', function(){
    return gulp.src(path.src.ejs)
        .pipe(ejs({}, {}, { ext: '' }))
        // .pipe(minifyejs())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});

gulp.task('js:build', function () {
    return gulp.src(path.src.js)
        .pipe(fileInclude({
            prefix: '@@'
        }))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('jsWhite:build', function () {
    return gulp.src(path.src.jsWhite)
        .pipe(fileInclude({
            prefix: '@@'
        }))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest(path.build.jsWhite))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('style:build', function () {
    return gulp.src(path.src.style)
        .pipe(concat('main.css'))
        .pipe(sass())
        .pipe(prefixer())
        .pipe(cleancss())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('styleWhite:build', function () {
    return gulp.src(path.src.styleWhite)
        .pipe(concat('main-white.css'))
        .pipe(sass())
        .pipe(prefixer())
        .pipe(cleancss())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('image:build', function () {
    return gulp.src(path.src.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('imageWhite:build', function () {
    return gulp.src(path.src.imgWhite)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.imgWhite))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('fonts:build', function () {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', [
    'ejs:build',
    'style:build',
    'styleWhite:build',
    'js:build',
    'jsWhite:build',
    'fonts:build',
    'image:build',
    'imageWhite:build'
], function () {
    console.log('===ALL COMPRESSED===');
});

gulp.task('watch', ['webserver'], function () {
    watch([path.watch.ejs], function (event, cb) {
        gulp.start('ejs:build');
    });
    watch([path.watch.style], function (event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.styleWhite], function (event, cb) {
        gulp.start('styleWhite:build');
    });
    watch([path.watch.js], function (event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.jsMod], function (event, cb) {
        gulp.start('js:build');
        gulp.start('jsWhite:build');
    });
    watch([path.watch.jsWhite], function (event, cb) {
        gulp.start('jsWhite:build');
    });
    watch([path.watch.img], function (event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.imgWhite], function (event, cb) {
        gulp.start('imageWhite:build');
    });
    watch([path.watch.fonts], function (event, cb) {
        gulp.start('fonts:build');
    });
});

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('clean', function () {
    return gulp.src('./build', {read: false})
        .pipe(clean());
});



gulp.task('default', function(){
    runSequence('clean', 'build', 'watch'), function () {
        console.log('===ALL DONE===')
    }
});