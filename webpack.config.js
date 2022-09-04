const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports={
	mode: 'production',
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
	entry: "./src/index.js",
	target: "web",
	output: {
		path: "/MpMcCall1.github.io",
		filename: 'bundle.js'
	},
	devServer: {
		port: "9500",
		open: true,
		liveReload: true
	},
	module:{
		rules:[
		{
			test: /\.css$/,
			use: ["style-loader", "css-loader"]
		},
		{
			test: /\.(png|jpg|gif)$/,
			use: [{
				loader: 'file-loader',
				options: {}
			}]
		},
		{
			test: /\.js$/,
        		exclude: /node_modules/,
        		use: ["babel-loader"]
		}
		]
	},
	 plugins:[
	 	new HTMLWebpackPlugin({template: "./index.html"})
	 ]
};
