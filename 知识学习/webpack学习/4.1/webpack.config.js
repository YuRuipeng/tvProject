var path = require('path');
var ExtractTextWebpackPlugin = require("extract-text-webpack-plugin")
module.exports={
    entry:{
        app:"./src/app.js"
    },
    output:{
        path:path.resolve(__dirname,"dist"),
        publicPath:"./dist/",
        filename:'[name].bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:ExtractTextWebpackPlugin.extract({
                    fallback:{
                        loader:"style-loader",
                        // loader:"style-loader/url"
                        // loader:"style-loader/useable"
                        options:{
                            // insertInto:"#app",
                            singleton:true,
                            transform:'./css.transfrom.js'

                        }
                    },
                    use:[
                        {
                            loader:"css-loader",
                            options:{
                                minimize:true,
                                module:true,
                                localIdentName:'[path][name]_[local]_[hash:base64:5]'
                            }
                            // loader:"file-loader"
                        },
                    ]
                })
            },
            {
                test:/\.(png|jpg|jpeg|gif)$/,
                use:[
                    {
                        loader:"file-loader",
                        options:{
                            publicPath:'',
                            outputPath:"dist/",
                            useRelativePath:true
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new ExtractTextWebpackPlugin({
            filename:'[name].min.css'
        })
    ]

}