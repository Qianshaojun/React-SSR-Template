const path = require('path');
module.exports = {
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react'],
					// 从Babel v7开始，所有的stage预设都已经弃用，
					// 需要我们安装一个叫 @babel/plugin-proposal-class-properties 的插件
					plugins: ['@babel/plugin-proposal-class-properties'],
				},
			},
		],
	},
};
