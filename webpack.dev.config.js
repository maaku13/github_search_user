const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'eval',
  
  entry: [
	'webpack-hot-middleware/client',
	'./src/index.js'
  ],

  output: {
	/*path: path.join(__dirname, 'app'),// 'public'
    filename: 'app/js/main.js' // local - 'js/main.js'
	//publicPath: '/app/js/' // local - '/app/'*/
	/*path: '/',
    filename: 'app/js/main.js'*/
	
	//path: path.join(__dirname),
    //filename: 'main.js'
	
	path: path.resolve(__dirname),
    publicPath: '/',
    filename: 'main.js'
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