* cnpm install -g gulp
* cnpm install --save-dev gulp
* 在项目根目录新建gulpfile.js文件
* 在gulpfile.js文件进行如下配置
```
var gulp = require('gulp');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});
```
* 运行 gulp
* 安装插件
```
* gulp-concat : 合并javascript文件，减少网络请求
* gulp-connect: 浏览器自动刷新
* gulp-clean-css（gulp-minify-css已废弃）: 压缩css文件
* gulp-plumber ： 处理异常
* gulp-less : less编译
* gulp-rename ： 文件更名
* gulp-uglify ：压缩javascript文件

```
* 配置
```
var gulp = require('gulp');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var clean = require('gulp-clean-css');
var plumber = require('gulp-plumber');
var less = require('gulp-less');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
//js
gulp.task('js',function () { 
    gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(connect.reload())
});
//html
gulp.task('html',function(){
    gulp.src('src/html/*.html')
        .pipe(gulp.dest('dist/html'))
        .pipe(connect.reload())
});
gulp.task('indexHtml',function(){
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload())
});
//less
gulp.task('less',function(){
    gulp.src('src/less/main.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'))
        .pipe(connect.reload())
});
//css
gulp.task('css',function(){
    gulp.src('src/css/*.css')
        .pipe(clean())
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, 
            remove:true 
        }))
        .pipe(gulp.dest('dist/css'));
});
//连接服务器
gulp.task('connect', function(){
    connect.server({
        livereload: true
    });
});
//监听文件变化
gulp.task('watch',function(){
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch('src/index.html', ['indexHtml']);
    gulp.watch('src/html/*.html', ['html']);
    gulp.watch('src/less/*.less',['less'])
    gulp.watch('src/css/*.css',['css'])
});

gulp.task('default', [ 'js','watch', 'html','indexHtml','less','css','connect']);
```
* 目录结构
```
gulp
    dist
        css
        js
        html
        index.html
    src
        css
        js
        img
        html
        less
        index.html
    gulpfile.js
    package.json
```