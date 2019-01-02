var gulp = require("gulp"),
  watch = require("gulp-watch");

gulp.task("watch", function() {
  watch("./index.html", function() {
    console.log("Gulp is running well!!");
  });

  watch("./assets/styles/**/*.css", function() {
    console.log("CSS file changed!!!");
  });
});
