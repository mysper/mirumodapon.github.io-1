const path = require('path');

module.exports = {
	entry: ['./index.js'],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './build')
	},
	module: {
		rules: [
			{
				test: /.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			{
				test: /.css$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.css']
	},
	devServer: {
		port: 5000
	}
};
