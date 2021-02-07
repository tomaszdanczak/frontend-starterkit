const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Strona główna",
      template: "src/pages/index.html",
      filename: "index.html",
    }),
  ],
};
