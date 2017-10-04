var gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'); // Подключаем Sass пакет
    autoprefixer = require('gulp-autoprefixer');
    pug = require('gulp-pug'); // Подключаем pug

gulp.task('sass', function() { 
  return gulp.src(['sass/**/*.sass', 'sass/**/*.scss'])
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('css')) 
  });

gulp.task('views', function buildHTML() {
  return gulp.src('pug/*.pug') // Берем папку, в которой находятся pug-файлы
  .pipe(pug({
    // Your options in here. 
    pretty: true
  }))
  .pipe(gulp.dest('./')) // Определяем папку, в которую будем класть выходной html-файл
});

gulp.task('watch', function() {
  gulp.watch(['sass/**/*.sass', 'sass/**/*.scss'], ['sass']); // Наблюдение за sass файлами в папке sass
  gulp.watch(['pug/**/*.pug'], ['views']); // Если что-то изменится в папке pug, значит нам нужно запусть таск views, который запустит pug и положит данные в html-файл(ы)
});

gulp.task('default', ['watch']);