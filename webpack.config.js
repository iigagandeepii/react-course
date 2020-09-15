//what webpack does, is it takes all the ewuired importing modules and creates a single bundle
//then we can just use that single bundle, reference it in out proj

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry : './app/index.js',  //initially the file that kicks off everything
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: 'index_bundle.js',
		publicPath : '/'
	},

		//define types of transformations
		module: {
			rules:[
				{	test: /\.(js)$/, use: 'babel-loader'},
				{	test: /\.css$/, use: ['style-loader', 'css-loader']}
			]
		}
	,
	mode : process.env.NODE_ENV === 'production' ? 'production' : 'development',
	plugins :[
	new HtmlWebpackPlugin({
		template: 'app/index.html'
	})
],
devServer:{
	historyApiFallback : true
}
}
