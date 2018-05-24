//
const webpack = require('webpack');
const path = require("path");
const config =  {
	entry: path.join(__dirname,'src/main.js'),//入口
	output:{
		publicPath: '/dist/',
		filename:"bundle.js",
		path:path.join(__dirname,'dist')
	},//出口
	module:{
		rules:[
			{
				test:/\.vue$/,
				loader:'vue-loader'
			},
			{
				test:/\.css$/,
				use:['style-loader','css-loader']
			},
			{
				test:/\.less$/,
				use:['style-loader','css-loader','less-loader']
			},
			{
				test:/\.(png|jpg|jpeg|gif|svg)$/,
				use:[
					{
						loader:'url-loader',
						options:{
							limit:1024,//小于  转码
							name:"[name].[ext]?[hash]"
						}
					}
				]
			}
		],
	},//模块
	devServer: {
        inline:true,
        hot:true,
        port:8808,//端口号
        stats: "errors-only",//仅报错时显示
        overlay: true,//提示错误
        host:'127.0.0.2',//配置host
        contentBase: "./", 
        historyApiFallback:true,
   	},
	plugins:[
		new webpack.HotModuleReplacementPlugin()//此处必须加
	]//插件
};
module.exports = config;