const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'eval',

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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
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
