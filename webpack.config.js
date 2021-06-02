<<<<<<< HEAD
const path = require("path");
=======
const path = require('path');
>>>>>>> react_second_setup

module.exports = {
  context: __dirname,
  entry: "./frontend/entry_more_trails",
  output: {
<<<<<<< HEAD
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js",
=======
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
>>>>>>> react_second_setup
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
<<<<<<< HEAD
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"],
          },
        },
      },
    ],
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"],
  },
=======
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
>>>>>>> react_second_setup
};
