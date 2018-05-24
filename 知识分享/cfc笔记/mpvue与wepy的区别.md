### 1.安装
#### 利用vue-cli与cnpm快速安装mpvue
- cnpm install --global vue-cli
- vue init mpvue/mpvue-quickstart my-project
- cd my-project
- cnpm install
- npm run dev
#### 快速安装wepy
- cnpm install wepy-cli -g
- wepy init standard myproject
- cd myproject
- cnpm  install
- wepy build --watch

> 总结：在安装上，mpvue直接采用vue-cli进行开发，而wepy则用自己的一套脚手架工具

### 2.目录结构
```
相同点： 
1. dist目录为编译后的小程序目录，src为开发目录；src下components为组件目录，pages下为页面目录
2. 都采用单文件组件的形式进行开发
不同点：
1. mpvue里的组件都是'.vue'文件，wepy则全是以'.wpy'为后缀的文件
2. 在mpvue中，每个页面都要有index.vue与main.js这两个文件，由这两个文件共同编译；而在wepy中，不管是组件还是页面都只有一个.wpy文件，文件名称为相应页面名称
```

### 3.开发模式转换
#### mpvue:
```
export default {
    data () {
        return {
            isActive: true
        }
    },
    computed: {
        computedClassStr () {
            return this.isActive ? 'active' : ''
        },
        computedClassObject () {
            return { active: this.isActive }
        }
    }
}
```
#### wepy:
```
import wepy from 'wepy';
//通过继承自wepy.page的类创建页面逻辑
export default class Index extends wepy.page {
    //可用于页面模板绑定的数据
    data = {
        motto: 'Hello World',
        userInfo: {}
    };
    //事件处理函数(集中保存在methods对象中)
    methods = {
        bindViewTap () {
            console.log('button clicked');
        }
    };
    //页面的生命周期函数
    onLoad() {
        console.log('onLoad');
    };
}
```
### 模板语法
#### mpvue:
- 大致语法与写vue相同
- 不支持v-html
- 无法支持复杂的 JavaScript 表达式，目前只能支持+ - * % ?: ! == === > < [] .
- 不支持过滤器
- 采用官方vue计算属性
- 不支持在 template 内使用 methods 中的函数。
- 不支持 官方文档：Class 与 Style 绑定 中的 classObject 和 styleObject 语法。
- 不支持在组件上使用 Class 与 Style 绑定
- 采用vue官方条件渲染和列表渲染
- 事件要用简写（@开头）
- 表单控件建议开发过程中直接使用 微信小程序：表单组件；select 组件用 picker 组件进行代替；表单元素 radio 用 radio-group 组件进行代替
- 包含了vue和小程序所有的生命周期（小程序的生命周期，在vue生命周期中的created和beforMount之间）

#### wepy:
- 大致语法与写原生小程序类似,对于部分API进行了优化
- 直接使用原生小程序的组件标签
- 事件要用简写，以@开头
- 组件的循环渲染要使用for
- 简化了小程序数据绑定方式，在异步函数中更新数据时，必须手动调用$apply方法，例如：
```
小程序写法：this.setData({title: 'this is title'});
wepy写法：this.title = 'this is title';
        在异步函数中更新数据时
        setTimeout(() => {
            this.title = 'this is title';
            this.$apply();
        }, 3000);
```
- 修改wx.request接收数据方式,例如：
```
wepy.request('xxxx').then((d) => console.log(d));
```
- 优化事件参数传递,例如
```
<view @tap="tapName({{index}}, 'wepy', 'otherparams')"> Click me! </view>

methods: {
    tapName (id, title, other, event) {
        console.log(id, title, other)// output: 1, wepy, otherparams
    }
}
```
- 组件代替模板和模块（这一点与vue写法类似），例如：
```
小程序写法：
<template name="item">
  <text>{{text}}</text>
</template>

<!-- index.wxml -->
<import src="item.wxml"/>
<template is="item" data="{{text: 'forbar'}}"/>

<!-- index.js -->
var item = require('item.js')

wepy写法：
<text>{{text}}</text>

<!-- index.wpy -->
<template>
    <com></com>
</template>
<script>
    import wepy from 'wepy';
    import Item from '../components/item';
    export default class Index extends wepy.page {
        components = { com: Item }
    }
</script>
```
- 只有小程序本身的生命周期
### 总结
- 简单的来说使用mpvue，就跟使用vue差不多，只不过限制了目录结构与部分vue功能的使用
- 而wepy其实就是对小程序的优化版和简化版，只是在很少的地方运用了vue的部分功能

