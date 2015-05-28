

var LOADER = [
  { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
];


var config = {
  entry: './client.js',
  output: {
      path: './public/javascript/',
      filename: 'client.bundle.js',
  },
  module: {
    loaders: LOADER
  }
};

module.exports = config;
