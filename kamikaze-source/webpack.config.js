var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: "/dist"
	},
	devServer: {
    contentBase: false,
    compress: true,
    hot: true
  },
	module: {
		loaders: [
			{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ],

    plugins: [
      new webpack.optimize.UglifyJsPlugin()
    ]
  }
}