var path = require('path');

module.exports = {  
  entry: path.resolve(__dirname, '../src/client/scripts/client.js'),
  output: {
    path: path.resolve(__dirname, '../public/dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.rt$/,
        loader: 'react-templates-loader'
      }
    ]
  }
};