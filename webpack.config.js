const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  devtool: 'inline-source-map',
  watch: true,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  mode: "development",
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',
        exclude: /node_modules/,      
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]'
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};