var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'source-map',
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/index.jsx'
    ],
    vendors: ['react']
  },

  module: {
      loaders: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'react-hot!babel'
        },
        { test: /\.css$/, exclue: /node_modules/, loader: ExtractTextPlugin.extract('style', 'css') },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
        { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
      ]
  },
  resolve: {
      extensions: ['', '.js', '.jsx']
  },
  output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'app.js'
  },
  devServer: {
      contentBase: './dist',
      hot: true
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css', {
        allChunks: true
    })
  ]
}
