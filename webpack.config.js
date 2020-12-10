/*
npm i webpack webpack-cli webpack-dev-server html-webpack-plugin css-loader style-loader -D
npm i css-loader style-loader sass-loader sass -D
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react -D
npm i react react-dom
 
style-loader: Injects CSS into DOM
css-loader: gets CSS by import statement
@babel/core: the actual engine
@babel/preset-env: for compiling modern Javascript down to ES5
babel-loader: for webpack
*/

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  /*
  entry: {
    // defaults to src/index.js
    index: path.resolve(__dirname, "src", "index.js"),
  },
  output: {
    // defaults to dist folder
    path: path.resolve(__dirname, "build"),
  },
*/
  module: {
    rules: [
      {
        test: /\.css$/,
        //order matters
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
};
