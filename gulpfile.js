const gulp = require('gulp');
const babel = require('gulp-babel');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const through2 = require('through2');

const paths = {
<<<<<<< HEAD
  dest: {
    lib: 'lib',
    esm: 'esm',
    dist: 'dist',
  },
  styles: 'src/**/*.less',
  scripts: ['src/**/*.{ts,tsx}', '!src/**/demo/*.{ts,tsx}', '!src/**/__tests__/*.{ts,tsx}'],
=======
    dest: {
        lib: 'lib', // commonjs 文件存放的目录名 - 本块关注
        esm: 'esm', // ES module 文件存放的目录名 - 暂时不关心
        dist: 'dist', // umd文件存放的目录名 - 暂时不关心
    },
    styles: 'src/**/*.less',
    scripts: ['src/**/*.{ts,tsx}', '!src/**/demo/*.{ts,tsx}', '!src/**/__tests__/*.{ts,tsx}'],
>>>>>>> 3968ddb6d71f1e972ba42c3db2e0a1297c05518e
};

/**
 * 当前组件样式 import './index.less' => import './index.css'
 * 依赖的其他组件样式 import '../test-comp/style' => import '../test-comp/style/css.js'
 * 依赖的其他组件样式 import '../test-comp/style/index.js' => import '../test-comp/style/css.js'
 * @param {string} content
 */
<<<<<<< HEAD
function cssInjection(content) {
  return content
    .replace(/\/style\/?'/g, "/style/css'")
    .replace(/\/style\/?"/g, '/style/css"')
    .replace(/\.less/g, '.css');
}
=======
 function cssInjection(content) {
    return content
      .replace(/\/style\/?'/g, "/style/css'")
      .replace(/\/style\/?"/g, '/style/css"')
      .replace(/\.less/g, '.css');
  }
>>>>>>> 3968ddb6d71f1e972ba42c3db2e0a1297c05518e

/**
 * 编译脚本文件
 * @param {*} babelEnv babel环境变量
 * @param {*} destDir 目标目录
 */
<<<<<<< HEAD
function compileScripts(babelEnv, destDir) {
  const { scripts } = paths;
  process.env.BABEL_ENV = babelEnv;
  return gulp
    .src(scripts)
    .pipe(babel())
    .pipe(
      through2.obj(function z(file, encoding, next) {
        this.push(file.clone());
        if (file.path.match(/(\/|\\)style(\/|\\)index\.js/)) {
          const content = file.contents.toString(encoding);
          file.contents = Buffer.from(cssInjection(content)); 
          file.path = file.path.replace(/index\.js/, 'css.js'); 
          this.push(file); 
          next();
        } else {
          next();
        }
      }),
    )
    .pipe(gulp.dest(destDir));
}
=======
 function compileScripts(babelEnv, destDir) {
    const { scripts } = paths;
    process.env.BABEL_ENV = babelEnv;
    return gulp
      .src(scripts)
      .pipe(babel()) // 使用gulp-babel处理
      .pipe(
        through2.obj(function z(file, encoding, next) {
          this.push(file.clone());
          // 找到目标
          if (file.path.match(/(\/|\\)style(\/|\\)index\.js/)) {
            const content = file.contents.toString(encoding);
            file.contents = Buffer.from(cssInjection(content)); // 文件内容处理
            file.path = file.path.replace(/index\.js/, 'css.js'); // 文件重命名
            this.push(file); // 新增该文件
            next();
          } else {
            next();
          }
        }),
      )
      .pipe(gulp.dest(destDir));
  }
>>>>>>> 3968ddb6d71f1e972ba42c3db2e0a1297c05518e

/**
 * 编译cjs
 */
function compileCJS() {
<<<<<<< HEAD
  const { dest, scripts } = paths;
  return gulp
    .src(scripts)
    .pipe(babel()) // 使用gulp-babel处理
    .pipe(gulp.dest(dest.lib));
=======
    const { dest, scripts } = paths;
    return gulp
        .src(scripts)
        .pipe(babel()) // 使用gulp-babel处理
        .pipe(gulp.dest(dest.lib));
>>>>>>> 3968ddb6d71f1e972ba42c3db2e0a1297c05518e
}

/**
 * 编译esm
 */
function compileESM() {
<<<<<<< HEAD
  const { dest } = paths;
  return compileScripts('esm', dest.esm);
=======
    const { dest } = paths;
    return compileScripts('esm', dest.esm);
>>>>>>> 3968ddb6d71f1e972ba42c3db2e0a1297c05518e
}

/**
 * 拷贝less文件
 */
function copyLess() {
<<<<<<< HEAD
  return gulp.src(paths.styles).pipe(gulp.dest(paths.dest.lib)).pipe(gulp.dest(paths.dest.esm));
=======
    return gulp.src(paths.styles).pipe(gulp.dest(paths.dest.lib)).pipe(gulp.dest(paths.dest.esm));
>>>>>>> 3968ddb6d71f1e972ba42c3db2e0a1297c05518e
}

/**
 * 生成css文件
 */
function less2css() {
<<<<<<< HEAD
  return gulp
    .src(paths.styles)
    .pipe(less()) 
    .pipe(autoprefixer())
    .pipe(cssnano({ zindex: false, reduceIdents: false })) 
    .pipe(gulp.dest(paths.dest.lib))
    .pipe(gulp.dest(paths.dest.esm));
=======
    return gulp
        .src(paths.styles)
        .pipe(less()) // 处理less文件
        .pipe(autoprefixer()) // 根据browserslistrc增加前缀
        .pipe(cssnano({ zindex: false, reduceIdents: false })) // 压缩
        .pipe(gulp.dest(paths.dest.lib))
        .pipe(gulp.dest(paths.dest.esm));
>>>>>>> 3968ddb6d71f1e972ba42c3db2e0a1297c05518e
}

// 串行执行编译脚本任务（cjs,esm） 避免环境变量影响
const buildScripts = gulp.series(compileCJS, compileESM);

// 整体并行执行任务
const build = gulp.parallel(buildScripts, copyLess, less2css);
// 保障组件库开发者的开发体验 DX；
// 减轻业务方的使用成本。
<<<<<<< HEAD
=======

>>>>>>> 3968ddb6d71f1e972ba42c3db2e0a1297c05518e
// 此处参考antd-tools的实现方式：在处理scripts任务中，截住style/index.js，生成style/css.js，并通过正则将引入的less文件后缀改成css。

exports.build = build;

exports.default = build;