var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
uglify = require('gulp-uglify'),
clean = require('clean-css'),
cssmin = require('gulp-cssmin'),
rename = require('gulp-rename');

gulp.task('build-img', function(){
	gulp.src(['lib/img/**/*', '!lib/img/**/Thumbs.db'])
	.pipe(imagemin())
	.pipe(gulp.dest('lib/img'));	
});

gulp.task('uglify-js', function () {
    gulp.src(['lib/jquery/**/*', '!lib/jquery/**/Thumbs.db'])
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))    
    .pipe(gulp.dest('lib/jquery'));
})

gulp.task('clean-css', function () {
    gulp.src(['lib/css/**/*', '!lib/css/**/Thumbs.db'])
    .pipe(clean())
    .pipe(gulp.dest('lib/css'));
});

gulp.task('cssmin', function () {
    gulp.src(['lib/css/*.css','!lib/css/**/Thumbs.db'])
    .pipe(cssmin({
        exclude: ['tasks'],
        ignoreFiles: ['.map',
                      '.scss',
                      '.map.scss',
                      '.min']
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('lib/css'));

    gulp.src(['lib/bootstrap/css/*.css', '!lib/bootstrap/**/Thumbs.db'])
    .pipe(cssmin({
        exclude: ['tasks'],
        ignoreFiles: ['.map',
                      '.scss',
                      '.map.scss',
                      '.min']
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('lib/bootstrap/css'));
});