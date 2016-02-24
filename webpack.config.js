var path = require('path');

module.exports = {
  entry: './client/app/index.module.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'client.js'
  },
  module: {
    loaders: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
    {
        test: /\.html/,
        loader: 'raw'
    }
  ]
  }
};