const {src, dest, watch, series} = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");
const minify = require("gulp-minify");
const htmlmin = require("gulp-htmlmin");

// Static server
function bs() {
  serveSass();
  browserSync.init({
    server: {
      baseDir: "src/",
    },
  });
  watch("src/*.html").on("change", browserSync.reload);
  watch("src/sass/**/*.sass", serveSass);
  watch("src/sass/**/*.scss", serveSass);
  watch("src/script/*.js").on("change", browserSync.reload);
};

function serveSass() {
  return src('src/sass/**/*.sass', 'src/sass/**/*.scss')
    .pipe(sass())
    .pipe(dest("src/style/"))
    .pipe(browserSync.stream());
};

function buildCss(done){
  src("src/style/*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(dest("dist/style"));
  done();
};

function buildJS(done) {
  src(["src/script/*.js"])
    .pipe(minify({
      ext: {
        src: '*.js',
        min: '.js' 
      },
    }))
    .pipe(dest("dist/script"));
  done();
}

function buildHTML(done) {
  src("src/**.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("dist/"));
  done();
};

function buildFonts(done) {
  src('src/fonts/**')
    .pipe(dest('dist/fonts/'));
  src("src/fonts/fontawesome/fontawesome-free-5.10.2-web/**/**")
    .pipe(dest("dist/fonts/fontawesome/fontawesome-free-5.10.2-web/"));
  done();
};

function buildImg(done) {
  src('src/image/**/**')
  .pipe(dest('dist/image/'));
  done();
};

exports.serve = bs;
exports.build = series(buildCss, buildJS, buildHTML, buildFonts, buildImg);


