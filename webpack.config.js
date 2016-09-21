const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
      bikeBuilder:'./app/js/bikeBuilder.js',
      variationManager:'./app/js/variationManager.js'
  },
  output: {
      path: __dirname + '/dist',
      filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.css$/, loader: "style-loader!css-loader"},
      {test: /\.less$/, loader: "style!css!less"},
      {test: /\.(jpe?g|png|gif|svg|ttf)$/i, loader: "file-loader" },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
      inject: true,
      chunks: ['bikeBuilder'],
      template: __dirname + "/app/bikestest.html",
      filename: 'biketest.html'
      }),
      new HtmlWebpackPlugin({
      inject: true,
      chunks: ['variationManager'],
      template: __dirname + "/app/variationManager.html",
      filename: 'variationManager.html'
      }),
    ]

};





