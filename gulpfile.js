var gulp = require("gulp"),
  watch = require("gulp-watch");

gulp.task("styles", function() {
  return gulp
    .src("./assets/styles/styles.css")
    .pipe(gulp.dest("./temp/styles"));
});

gulp.task("watch", function() {
  watch("./index.html", function() {
    console.log("Gulp is running well!!");
  });

  watch("./assets/styles/**/*.css", function() {
    gulp.start("styles");
  });
});
