//const webpack = require('webpack')  // for uglifyjs
const HtmlWebpackPlugin = require('html-webpack-plugin')  // for pug
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

let config = {
  entry: ['bootstrap-loader', './src/scripts/main.js'],
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
      ,{  // import jQuery into bootstrap
        test: /bootstrap-sass\/assets\/javascripts\//,
        loader: 'imports?jQuery=jquery'
      }
      ,{  // process *.pug files
        test: /\.pug$/,
        loader: 'pug-loader',
        include: /src/
      }
      ,{  // use url-loader for bootstrap loading icons/fonts
        test: /\.(woff2?|svg)$/,
        loader: 'url?limit=10000'
      }
      ,{
        test: /\.(ttf|eot)$/,
        loader: 'file'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'My WebApp',
      template: 'src/index.pug'
    })
    , new BrowserSyncPlugin({
      host: 'localhost',
      port: 8080,
      server: {
        baseDir: ['dist']
      }
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

// inject other conditional options here?
//
// if (conditional) config.something = somethingElse

module.exports = config
