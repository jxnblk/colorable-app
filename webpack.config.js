
const path = require('path')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')

module.exports = {
  entry: {
    bundle: './src/entry.js'
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'css'
      }
    ]
  },

  plugins: [
    new StaticSiteGeneratorPlugin('bundle', ['/'], {})
  ],

  devServer: {
    contentBase: 'build/',
    historyApiFallback: true
  }
}

