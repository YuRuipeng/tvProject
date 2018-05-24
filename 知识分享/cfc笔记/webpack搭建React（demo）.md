* npm init 生成 package.json文件
* cnpm install -g react
* cnpm install --save-dev react react-dom
* cnpm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react babelify
* cnpm install --save-dev webpack webpack-react
* 新建webpack.config.js
* 新建src文件夹 > 新建js文件夹, index.html
* js文件夹 > index.js,components文件夹
* components文件夹 > header.js
* webpack.config.js
```
var path = require('path');
var webpack = require('webpack');
var config = {
    context:path.join(__dirname),
    entry:'./src/js/index.js',
    output:{
        path:__dirname,
        filename:"./src/bundle.js"
    },
    module:{
        rules:[
            {
                loader:'babel-loader',
                query:{
                    presets:['react','es2015']
                }
            }
        ]
    },
    plugins:[]
}
module.exports = config;
```
* index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="box"></div>
    <script src="./bundle.js"></script>
</body>
</html>
```
* index.js
```
import React from 'react';
import React from 'react-dom';
import Header from './components/header.js';
class Index extends React.Compontent{
    render(){
        return(
            <div>
                hello
                <Header />
            </div>
        )
    }
}
ReactDom.render(<Index />,document.getElementById('box'))
```
* header.js
```
import React from 'react';
import ReactDom from 'react-dom';
export default class Header extends React.Component{
    render(){
        return (<p>123</p>)
    }
}
```