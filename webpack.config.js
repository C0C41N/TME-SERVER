const { resolve } = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');

const { NODE_ENV = 'production' } = process.env;

module.exports = {
	entry: './src/index.ts',
	mode: NODE_ENV,
	target: 'node',
	watch: NODE_ENV === 'development',
	externals: [nodeExternals()],
	output: {
		path: resolve(__dirname, 'build'),
		filename: 'index.js',
	},
	resolve: {
		alias: {
			post: resolve(__dirname, 'src/post'),
			api: resolve(__dirname, 'src/api'),
			src: resolve(__dirname, 'src'),
		},
		extensions: ['.ts', '.js'],
	},
	plugins: [
		new WebpackShellPlugin({
			onBuildEnd: NODE_ENV === 'development' ? ['NODE_ENV=development nodemon build/index.js'] : [],
		}),
	],
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: ['ts-loader'],
			},
		],
	},
};
