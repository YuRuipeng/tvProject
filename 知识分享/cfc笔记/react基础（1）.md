#### 1. es6面向对象构建函数语法
```
class fn {
    constructor(name,age){ //constructor是一个构造函数
        super();//执行父类构造器的内容，constructor后必跟super()
    }
    //增加prototype，es6直接可以简写为以下形式
    showName(){
        console.log(this.name);
    }

}
```
> 以上代码写成es5形式
```
function fn(name,age){
    this.name = name;
    this.age = age;
}
fn.prototype.showName = function(){
    console.log(this.name);
}
var n1 = new fn();
```
#### 2. 设计模式 - 单例模式
```
var page={
    data:{

    },
    init:function(){

    }
};
```
#### 3. 导出 
* es6 语法
```
export default{

}
```
* commonJs语法
```
module.exports = {

}
```
#### 4. 导入
* es6语法
```
import '' from '';
```
* commonJs
```
var xxx = require('xxx);
```
* es5语法
```
var utils = (function(){
    function win(){

    }
    return{
        win:win
    }
})();
```
#### 5. react基本用法（定义对象/修改this指针/定义方法/遍历循环/父子传值）
* 定义对象写在constructor函数内，写法为 this.state={}
* 修改this指针用bind()
* 定义一个点击事件用oncliack={this.xxx}
* 遍历循环用map()方法
* 父向子传值用this.prop.xxx

```
例如：
import React from 'react';
import ReactDom from 'react-dom';

export default class Header extends React.Component{
    constructor(){
        super();
        // 定义对象的地方
        this.state={
            list:["1","2","3"],
            message:'123'
        };
        console.log(this)
        // 怎样去修改this指针 - 这是推荐的方法
        this.add = this.add.bind(this);
    }

    add(){
        // 如果要改变state当中的值
        this.setState({
            message:'xxxx'
        });
    }
    
    // 怎样获取前台父组件的属性 ： 通过this.props.xxx来获取
    render(){
        // 1、为什么要用map函数,因为它有返回值
        var items = this.state.list.map((item,index)=>{
            // 2、为什么要有key值,保证唯一性
            return <li key={index}>{item}</li>;
        });
        return (
            <div>
                <p>123</p>
                {/*接收父组件传过来的值*/}
                <p>{this.props.title}</p>
                <ul>
                    {items}
                </ul>
                {/*点击事件：要用驼峰形式*/}
                <button onClick={this.add}></button>
                {/*<button onClick={this.add.bind(this)}></button> 消耗性能*/}
            </div>
        )
    }
}
```
