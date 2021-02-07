const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.config.pages");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "../", "dist"),
  },
  devServer: {
    contentBase: path.resolve(__dirname, "../", "public"),
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|png|svg|gif|jpeg)$/,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/index.css",
    }),
  ],
});
