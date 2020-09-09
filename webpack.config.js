const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
      test: /\.jsx?/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env','@babel/preset-react']
        }
      }
    }
    ]
  },
  devServer: {
    publicPath: '/build/',
    contentBase: path.join(__dirname, './client'),
    proxy: {
      '/api': 'http://localhost:3000'
    },
    hot: true
  }
};