const path = require("path");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.join(__dirname, "public/js"),
    filename: "bundle.js"
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              localsConvention: "camelCase",
              modules: {
                localIdentName: "[path][name]__[local]--[hash:base64:5]"
              }
            }
          }
        ]
      }
    ]
  }
};
