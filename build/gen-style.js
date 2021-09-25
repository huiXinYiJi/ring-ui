const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const components = require('../components.json')

function compile(cb) {
  gulp.src('../src/styles/index.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false // 是否美化属性值 
    }))
    .pipe(cleanCSS())
    .pipe(rename('ring-ui.css'))
    .pipe(gulp.dest('../lib/styles'));
  cb()
}

// 打包单独的css文件
function buildSeperateCss(cb) {
  Object.keys(components).forEach(compName => {
    gulp.src(`../src/styles/${compName}.scss`)
      .pipe(sass())
      .pipe(autoprefixer({
        cascade: false // 是否美化属性值 
      }))
      .pipe(cleanCSS())
      .pipe(rename(`${compName}.css`))
      .pipe(gulp.dest('../lib/styles'));
  })
  cb()
}

exports.default = gulp.series(compile, buildSeperateCss)
