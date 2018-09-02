var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefix = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    cleanCss = require('gulp-clean-css'),
    babel = require('gulp-babel'),
    sourcemap = require('gulp-sourcemaps'),
    imgmin = require('gulp-imagemin'),
    plumber = require('gulp-plumber'),
    wait = require('gulp-wait'),
    concat = require('gulp-concat')

var paths = {
        styleSrc : 'src/styles/**/*.sass',
        styleDest : 'dist/assets/styles',

        htmlDest : 'dist/**/*.html',

        jsSrc : 'src/app/**/*.js',
        jsDest : 'dist/assets/app',

        imgSrc : 'src/images/*',
        imgDest : 'dist/assets/images'
    };

gulp.task('default', ['serve']);

gulp.task('imagemin', function(){
    return gulp.src(paths.imgSrc)
                .pipe(imgmin())
                .pipe(gulp.dest(paths.imgDest))
})

gulp.task('sass', function(){
    return gulp.src(paths.styleSrc)
        .pipe(plumber())
        .pipe(wait(500))
        .pipe(sourcemap.init())
        .pipe(sass())
        .pipe(autoprefix())
        .pipe(cleanCss({compatibility: 'ie8'}))
        .pipe(sourcemap.write())
        .pipe(gulp.dest(paths.styleDest));
});

gulp.task('javascript', function(){
    return gulp.src(paths.jsSrc)
        .pipe(plumber())
        .pipe(sourcemap.init())
        .pipe(concat('app.js'))
        .pipe(babel({
            presets: ['es2015'],
            minified: true
        }))
        .pipe(sourcemap.write())
    
        .pipe(gulp.dest(paths.jsDest));
})

gulp.task('serve', ['sass', 'javascript'], function(){
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        notify: false
    });
    
    gulp.watch(paths.styleSrc, ['sass']);
    gulp.watch(paths.jsSrc, ['javascript']);
    gulp.watch([paths.htmlDest, paths.jsDest + '/*.js', paths.styleDest + '/*.css']).on('change', browserSync.reload);
})