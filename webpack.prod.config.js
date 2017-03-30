const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',

  entry: [
	'webpack-hot-middleware/client',
	'./src/index.js'
  ],

  output: {
	path: __dirname,
    filename: 'js/main.js',
	publicPath: '/app/'
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],

  module: {
    loaders: [
      {
		test: /\.jsx?$/,
		loader: 'babel-loader',
		exclude: /node_modules/
	  }
    ]
  }
}
