* npm init 生成 pagkage.json文件
* cnpm install webpack -g
* cnpm install vue -g
* cnpm install webpack css-loader style-loader file-loader url-loader less less-loader vue vue-loader vue-template-compiler --save-dev
* cnpm install webpack-dev-server --save-dev
* 新建src文件夹,dist文件夹,index.html,webpack.config.js
* src > app.vue,main.js
* webpack.config.js
```
const webpack = require('webpack');
const path = require('path');
const config = {
    entry:path.join(__dirname,'src/main.js'),
    output:{
        path:path.join(__dirname,'dist'),
        filename:"bundle.js"
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:"vue-loader"
            }
        ]
    },
    devServer:{
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
        new webpack.HotModuleReplacementPlugin()
    ]
}
module.exports = config;
```
* main.js
```
import Vue from 'vue';
import App from './app.vue';
const root = document.createElement('div');
document.body.appendChild(root);
new Vue({
    render:(h)=>h(App)
}).$mount(root)

```
* app.vue
```
<template>
    <div id="app">
        {{text}}
    </div>
</template>
<script>
    export default {
        data(){
            return{
                text:"hello",
            }
        }
    }
</script>
<style>
    
</style>
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
    
    <script src="dist/bundle.js"></script>
</body>
</html>
```
* package.json
```
{
  "name": "webpack-vue",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack",
    "dev": "webpack-dev-server --open"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "css-loader": "^0.28.9",
    "file-loader": "^1.1.6",
    "less": "^2.7.3",
    "less-loader": "^4.0.5",
    "style-loader": "^0.20.1",
    "url-loader": "^0.6.2",
    "vue": "^2.5.13",
    "vue-loader": "^14.1.1",
    "vue-template-compiler": "^2.5.13",
    "webpack": "^3.10.0",
    "webpack-dev-server": "^2.11.1"
  }
}

```
