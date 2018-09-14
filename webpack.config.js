const webpack = require("webpack");
const path = require("path");

//Plugins
const prettier = require("prettier-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  entry: [
    "./app/index.tsx",
    "webpack/hot/only-dev-server",
    "webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr&reload=true"
  ],
  output: {
    filename: "app.bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "eval",
  mode: !isProduction ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          !isProduction && {
            loader: "babel-loader",
            options: {
              plugins: ["react-hot-loader/babel"]
            }
          },
          "awesome-typescript-loader"
        ]
      },
      {
        test: /(\.scss|\.css)/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /(\.woff|\.ttf|\.svg|\.eot|\.gif)/,
        use: "url-loader"
      }
    ]
  },
  resolve: {
    alias: {
      styles: path.resolve(__dirname, "app/styles/"),
      app: path.resolve(__dirname, "app/")
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.SourceMapDevToolPlugin({
      filename: "[name].js.map"
    }),
    new prettier({
      bracketSpacing: true
    }),
    new HtmlWebpackPlugin({
      template: 'views/index.html'
    }),
    new CleanWebpackPlugin(['dist'])
  ]
};
