const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  	entry: ['./src/bootstrap.js', './src/style/app.scss'],
  	output: {
  		path: __dirname + '/dist',
    	filename: 'app.js'
  	},
  	module: {
        rules: [
        	{
            	test: /\.scss/,
            	use:  ExtractTextPlugin.extract({
            		fallback: 'style-loader',
        			use: ['css-loader', 'sass-loader']
            	})
        	},
        	{
                test: /\.svg/,
                use: 'svg-url-loader'
            }
        ]
    },
    plugins: [
    	new ExtractTextPlugin('app.css')
  	]
};