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
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: "./build",
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
			test: /\.(js|jsx)$/,
        		exclude: /node_modules/,
        		use: ["babel-loader"]
		}
		]
	},
	 plugins:[
	 	new HTMLWebpackPlugin({template: path.resolve("./index.html")}),
	 ]
};
