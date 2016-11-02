const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['./src/scripts/main.js'],
  output: {
    path: './dist',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: /src\/scripts/,
        loader: 'babel-loader'
      }
      ,{
        test: /\.pug$/,
        loader: 'pug-loader',
        include: /src/
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'My WebApp',
      template: 'src/index.pug'
    })
/*
    , new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
*/
  ]
}
