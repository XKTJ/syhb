var path = require("path");

module.exports = {
  entry: "./assets/scripts/App.js",

  output: {
    path: path.resolve(__dirname, "./temp/scripts"),
    filename: "App.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        use: ["babel-loader"],
        test: /\.(js|jsx)$/,
        exclude: /node_modules/
      }
    ]
  }
};
