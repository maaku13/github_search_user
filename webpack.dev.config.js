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
    filename: 'main.js', // local - 'js/main.js'
	publicPath: '/app/js/' // local - '/app/'
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
