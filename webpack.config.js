const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports={
	mode: 'development',
	module:{
		rules:[
		{
			test: /\.css$/,
			use: ["style-loader", "css-loader"]
		},
		{
			test: /\.js$/,
        		exclude: /node_modules/,
        		use: ["babel-loader"]
		}
		]
	},
	plugins:[
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, "src", "index.html")
		})
	]
};
