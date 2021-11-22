const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		assetModuleFilename: 'assets/[hash][ext][query]',
	},
	resolve: {
		extensions: ['.js'],
		alias: {
			Utils: path.resolve(__dirname, 'src/utils'),
			Templates: path.resolve(__dirname, 'src/templates'),
			Styles: path.resolve(__dirname, 'src/styles'),
			Images: path.resolve(__dirname, 'src/assets/images'),
			Fonts: path.resolve(__dirname, 'src/assets/fonts'),
		},
	},

	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					/* options: {
						presets: ['@babel/preset-env'],
					}, */
				},
			},
			{
				test: /\.css|.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|jpg|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/images/[hash][ext][query]',
				},
			},
			{
				test: /\.(woff|woff2)$/,
				type: 'asset/resource',
				generator: {
					filename: 'assets/fonts/[name][ext]',
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: './public/index.html',
			filename: './index.html',
		}),
		new MiniCssExtractPlugin(),
		new Dotenv(),
	],
};
