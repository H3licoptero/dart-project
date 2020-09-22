const {src, dest, watch} = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");

function serveSass() {
  return src('src/sass/**/*.sass', 'src/sass/**/*.scss')
  .pipe(sass())
  .pipe(dest("src/style"))
  .pipe(browserSync.stream());
};

// Static server
function bs() {
  serveSass();
  browserSync.init({
    server: {
      baseDir: "src",
    },
  });
  watch("src/*.html").on("change", browserSync.reload);
  watch("src/sass/**/*.sass", serveSass);
  watch("src/sass/**/*.scss", serveSass);
};

exports.serve = bs;


