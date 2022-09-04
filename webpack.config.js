const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports={
	mode: "development",
	entry: "./src/index.js",
	target: "web",
	devServer: {
		port: "9500",
		open: true,
		liveReload: true
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
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
	 	new HTMLWebpackPlugin({template: "./src/index.html"})
	 ]
};
