const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      {
        test: /\.css?$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { importLoaders: 1, minimize: true }
          },
          "postcss-loader"
        ]
      }
    ]
  }
};
