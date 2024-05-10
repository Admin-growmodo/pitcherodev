const path = require("path")

const isProduction = process.env.NODE_ENV === "production"

const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

module.exports = {
  mode: isProduction ? "production" : "development",
  devtool: false,
  entry: "./scripts/index.js",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./scripts"),
    },
    extensions: [".css", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "./assets"),
    filename: "index.js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  "postcss-import",
                  "tailwindcss/nesting",
                  "tailwindcss",
                  "postcss-custom-media",
                  "postcss-preset-env",
                ],
              },
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: isProduction,
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
}
