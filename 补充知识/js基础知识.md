## 1. JS中typeof能得到哪些类型？
* typeof undefined  返回 undefind
* typeof null  返回 object
* typeof true  返回 boolean
* typeof 123  返回 number
* typeof 'abc'  返回 string
* typeof function() {}  返回 function
* typeof {}  返回 object
* typeof []  返回 object

## 2. 何时使用 === 和 ==？
```
var num = 1;
 
var str = '1';
 
var test = 1;
 
test == num   //true　相同类型　相同值
 
test === num  //true　相同类型　相同值
 
test !== num  //false test与num类型相同，其值也相同,　非运算肯定是false
 
num == str   //true 　把str转换为数字，检查其是否相等。
 
num != str   //false  == 的 非运算
 
num === str  //false  类型不同，直接返回false
 
num !== str  //true   num 与 str类型不同 意味着其两者不等　非运算自然是true啦
```
## 3. JS中有哪些内置函数？
* String
```
length属性:长度
concat 方法（String）连接两个或更多个字符串。
indexOf(string) 返回出现字符串的位置
substr(num1,[num2])截取字符串
toLowerCase() 转换成小写
toUpperCase() 转换成大写
replace(str1,str2) 字符串替换
```
* Array
```
concat() 返回一个由两个数组合并组成的新数组
join()  返回一个由数组中的所有元素连接在一起的 String 对象
pop()  删除数组中的最后一个元素并返回该值
push() 向数组中添加新元素，返回数组的新长度
shift() 删除数组中的第一个元素并返回该值
unshift() 返回一个数组，在该数组头部插入了指定的元素
sort()  返回一个元素被排序了的 Array 对象
reverse()  返回一个元素反序的 Array 对象
slice() 返回数组的一个片段
splice() 从数组中删除元素
```
* Data
```
getYear() 返回年份（2位或4位）
getFullYear() 返回年份（4位）
getMonth() 返回月份  0-11
getDate()     返回日期 1-31
getDay() 返回星期数 0-6
getHours() 返回小时数 0-23
getMinutes() 返回分钟数 0-59
getSeconds() 返回秒数 0-59
getMilliseconds() 返回亳秒数0-999
```
* Math
```
ceil(数值)   大于或等于该数的最小整数
floor(数值)   小于或等于该数的最大整数
min(数值1,数值2) 返回最小值
max(数值1,数值2) 返回最大值
pow(数值1,数值2) 返回数值1的数值2次方
random()     返回随机数 0---1
round(数值)     四舍五入
sqrt(数值)     开平方根
```
## 4. JS变量按照储存方式可以分为哪些类型？
* 值类型
>  值类型的特点：它每个变量都能存储各自的值，不会相互影响
* 引用类型
> 引用类型的特点：不同变量之间的值，会相互影响

## 5. 如何理解JSON
* 什么是JSON？
```
JSON 指的是 JavaScript 对象表示法（JavaScript Object Notation）
JSON 是轻量级的文本数据交换格式
JSON 独立于语言 
JSON 具有自我描述性，更易理解
JSON 使用 JavaScript 语法来描述数据对象，但是 JSON 仍然独立于语言和平台。JSON 解析器和 JSON 库支持许多不同的编程语言。
```
* JSON - 转换为 JavaScript 对象
```
JSON 文本格式在语法上与创建 JavaScript 对象的代码相同。
由于这种相似性，无需解析器，JavaScript 程序能够使用内建的 eval() 函数，用 JSON 数据来生成原生的 JavaScript 对象。
```
* 为什么使用 JSON？
```
对于 AJAX 应用程序来说，JSON 比 XML 更快更易使用
```
* JSON 语法规则
```
数据在键值对中
数据由逗号分隔
花括号保存对象
方括号保存数组
```
## 6. 如何判断一个变量是数组类型？
* Array.prototype.isPrototypeOf(obj)
> 利用isPrototypeOf()方法，判定Array是不是在obj的原型链中，如果是，则返回true,否则false。
* instanceof
> instanceof 方法主要是检测 变量的constructor 是否与 Array相等，也就是检测的变量的原型链是否指向Array构造函数的prototype原型上。
但是instanceof不一定能保证检测的结果一定正确，例如index页面传入一个arr变量给iframe去处理，则即使arr instanceof Array还是返回false，因为两个引用的Array类型不是同一个。并且constructor可以重写所以不能确保万无一失。
* constructor 同上
* Array.isArray()
> ECMAScript5将Array.isArray()正式引入JavaScript，目的就是准确地检测一个值是否为数组。IE9+、 Firefox 4+、Safari 5+、Opera 10.5+和Chrome都实现了这个方法。但是在IE8之前的版本是不支持的。 
* Object.prototype.toString.call()
> js中提供了，调用对象原型中的toString方法， Object.prototype.toString.call(obj)；因为很多对象继承的toString（）方法被重写了，为了能够调用正确的toString（）版本，也就是最原始的版本。可以使用Function.call()的方法，其中call可以这么理解，相当于obj去借用这个 Object.prototype.toString();

## 7. 原型链继承的例子
``` 
function A(){
    this.name = "小明"
}
A.prototype.getName = function(){
    return this.name
}
function B(){
    this.age = 20
}
B.prototype = new A() //b继承a
B.prototype.getAge = function(){
    return this.age
}
var x = new B()
console.log(x.getName()) //小明
console.log(x.getAge()) //20

//B继承A，x是B的实例，所以x也继承A，可以调用A中的属性和方法
```
## 8. 描述new一个对象的过程
```
（1）创建一个新对象
（2）this指向这个新对象
（3）执行代码，即对this进行赋值
（4）返回this

function Foo(){}
var foo = new Foo();

1.当JavaScript引擎执行new操作时，会马上开辟一个块内存，创建一个空对象（并将this指向这个对象）
2.执行构造函数Foo()，对这个空对象进行构造（构造函数里有什么属性和方法都一一给这个空白对象装配上去，这就是为何它叫构造函数了）。
3.给这个空对象添加了一个叫__proto__的属性，而且这个__proto__指向Foo()的prototype对象。换句话说，就是__proto__ = prototype;

每一个函数中都会有一个叫prototype的属性，类型是object，即一个引用对象。
每一个对象中都会有一个叫__proto__的属性，类型也是object，也是一个引用对象。
```
## 9. zepto或者其他框架如何使用原型链？
## 10. 原型规则有哪些？
* 所有的引用类型（数组、对象、函数），都具有对象特性，即可自由扩展属性（除了“null”以外）
* 所有的引用类型（数组、对象、函数），都有一个__proto__（我们约定它为隐式原型）属性，属性值是一个普通的对象。
* 所有的函数，都有一个prototype（我们约定它为显示原型）属性，属性值也是一个普通对象。
* 所有的引用类型（数组、对象、函数），__proto__（隐式原型）属性值指向它的构造函数的prototype（显示原型）属性值。
* 当试图得到一个对象（引用类型包括对象、数组、函数）的某个属性时，如果这个对象本身没有这个属性，那么会去它的__proto__（即它的构造函数的prototype）中寻找。
* 每个构造函数的prototype属性都有一个constructor属性，这个属性指向构造函数本身

## 11. 对变量提升的理解
* JavaScript中，函数及变量的声明都将被提升到函数的最顶部。
* JavaScript中，变量可以在使用后声明，也就是变量可以先使用再声明
```
    var a = 5;
    function foo(){
        console.log(a);
        var a =0;
    }
    foo() //undefind
```
## 12. this的几种使用场景
* 【场景1】全局环境中的this指向全局对象
```
this.a = 10;
alert(a);//10
b = 20;
alert(this.b);//20
var c = 30;
alert(this.c);//30
```
* 【场景2】对象内部函数的this指向调用函数的当前对象
```
var a = 10;
var bar = {
 a: 20,
 test: function(){
  alert(this.a);
 }
}
bar.test();//20
```
* 【场景3】全局环境函数的this指向全局对象
```
var a = 10;
function foo(){
 alert(this.a);
}
foo();//10
```
* 【场景4】匿名函数中的this指向全局对象
```
var a = 10;
var foo = {
 a: 20,
 fn: (function(){
  alert(this.a);
 })()
}
foo.fn//10
```
* 【场景5】setInterval和setTimeout定时器中的this指向全局对象
```
var a = 10;
var oTimer1 = setInterval(function(){
 var a = 20;
 alert(this.a);//10
 clearInterval(oTimer1);
},100);
```
* 【场景6】eval中的this指向调用上下文中的this
```
(function(){
 eval("alert(this)");//[object Window]
})();
function Foo(){
 this.bar = function(){
  eval("alert(this)");//[object Object]
 }
}
var foo = new Foo();
foo.bar();
```
* 【场景7】构造函数中的this指向构造出的新对象
```
function Person(name,age){
 this.name = name;
 this.age = age;
 this.sayName = function(){
  alert(this.name);
 }
}
var p1 = new Person('lily','20');
p1.sayName();//'lily
```
* 【场景8】new Function中的this指向全局对象
```
(function(){
 var f = new Function("alert(this)");
 f();//[object Window]
})();
function Foo(){
 this.bar = function(){
  var f = new Function("alert(this)");
  f();//[object Window]
 }
}
var foo = new Foo();
foo.bar();
```
* 【场景9】apply和call中的this指向参数中的对象
```
var a = 10;
var foo = {
 a: 20,
 fn: function(){
  alert(this.a);
 }
};
var bar ={
 a: 30
}
foo.fn.apply();//10(若参数为空，默认指向全局对象)
foo.fn.apply(foo);//20
foo.fn.apply(bar);//30
```
## 13. 创建十个a标签，点击弹出相应的序号
```
for(var i=0;i<10;i++){
    (function(i){
        var a=document.createElement('a');
        a.innerHTML=i+'<br>';
        document.body.appendChild(a);
        a.addEventListener('click',function(e){
            e.preventDefault();  //取消默认事件，指a标签
            alert(i);
        });
    })(i);
}
```
## 14. 如何理解作用域？
```
程序结构是分层次的，处在最底层的一个变量（设为a），它就只能在它所在的那个小范围中起作用，其他地方它是无效的；而另一个变量（设为b）所在的层次比a要高，那么b就能在它下属的各个层次中起作用（当然也包括a所在的层次）；依此类推，如果一个变量是处在最顶层的（也就是全局变量），那么它的作用域就是整个程序。
```
## 15. 实际开发中闭包的作用？
* 逻辑连续，当闭包作为另一个函数调用的参数时，避免你脱离当前逻辑而单独编写额外逻辑。
* 方便调用上下文的局部变量。
* 加强封装性，第2点的延伸，可以达到对变量的保护作用。

## 16. 获取2018-01-01的格式日期
```
var date = new Date
var mon = date.getMonth() + 1;
var day = date.getDate();
var nowDay = date.getFullYear() + "-" + (mon<10?"0"+mon:mon) + "-" +(day<10?"0"+day:day);
```
## 17. 写一个能遍历对象和数组的通用forEach函数
```
function forEach(obj){
    var key;
    if(obj  instanceof Array){
        obj.forEach(function(item){
            console.log(item)
        })
    }else{
        for(key in obj){
            console.log(key,obj[key])
        }
    }
}
var arr=[1,2,3,4,5];
forEach(arr);//输出:  1 2 3 4 5
var obj={x:1,y:2,z:3}
forEach(obj);//输出:  x 1 y 2 z 3
```
## 18. 前端使用异步的场景有哪些
```
1）定时任务：setTimeout,setInverval
2）网络请求：ajax请求，img图片的动态加载
3）事件绑定或者叫DOM事件，比如一个点击事件，我不知道它什么时候点，但是在它点击之前，我该干什么还是干什么。用addEventListener注册一个类型的事件的时候，浏览器会有一个单独的模块去接收这个东西，当事件被触发的时候，浏览器的某个模块，会把相应的函数扔到异步队列中，如果现在执行栈中是空的，就会直接执行这个函数。
4）ES6中的Promise
```










  