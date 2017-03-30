const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',

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
    publicPath: 'http://github-search-user.herokuapp.com/',
    filename: 'main.js'
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
