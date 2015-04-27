var path = require('path');

module.exports = {  
  entry: path.resolve(__dirname, 'src/client/main.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
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
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass"
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      { 
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff"
      },
      { 
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ]
  }
};