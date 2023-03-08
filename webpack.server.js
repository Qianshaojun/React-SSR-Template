const path = require('path');
const nodeExternal = require('webpack-node-externals');
const merge = require('webpack-merge');
const base = require('./webpack.base');

module.exports = merge(base, {
	// 注意这个值
	target: 'node', // 为了忽略诸如path、fs等内置模块。
	entry: './src/server/index.js',
	output: {
		path: path.resolve('build'),
		filename: 'server.js',
	},
	// 去除node_modules中的所有node_modules文件
	externals: [nodeExternal()],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'isomorphic-style-loader', // 将css转为style插入到header中，实现ssr
					{
						loader: 'css-loader',
						options: {
							modules: true,
						},
					},
				],
			},
		],
	},
});
