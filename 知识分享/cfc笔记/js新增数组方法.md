#### 1. indexOf
     indexOf()方法可返回某个指定的字符串值在字符串中首次出现的位置，默认从0开始，如果没在数组中找到相应字符串返回-1；
> 语法：
> array.indexOf(item,start);
* item为需要查找的元素；
* start为从哪开始（默认为0）；
* 该方法对大小写敏感；
```
 举例：
 var fruits = ["Banana","Orange","Apple","Mango","Banana","Orange","Apple"];
 var a = fruits.indexOf("Apple",4);
 consoe.log(a) // 6
```
#### 2. forEach
     forEach()方法用于调用数组每个元素，并将元素传递给回调函数
> 语法：
> array.forEach(function(currentValue, index, arr),thisValue);
* currentValue为当前元素；
* index为当前元素的索引；
* arr为当前元素的所属的数组对象；
* thisValue为传递给函数的值一般用 "this" 值。如果这个参数为空， "undefined" 会传递给 "this" 值（可以不设置）
* forEach()对于空数组是不会执行回调函数的；
* 数组中有几项，那么传递进去的匿名回调函数就需要执行几次；
* 没有返回值，仅仅是遍历数组中的每一项，不对原来数组进行修改，但是可以自己通过数组的索引来修改原来的数组；
```
举例：
var ary = [12,23,24,42,1];  
var res = ary.forEach(function (item,index,input) {  
       input[index] = item*10;  
})  
console.log(res);// undefined;  
console.log(ary);//[120,230,240,420,10,]
```
#### 3. map
     map()方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
> 语法：
> array.map(function(currentValue,index,arr), thisValue)
* map()方法的参数与forEach()方法一致；
* map()方法也不会对空数组进行检测；
* map()方法又返回值，不会改变原始数组；
```
举例： 
 1 let arr = [1, 2, 3, 4];
 2 let newArr = arr.map(function(item) {
 3         return item * 2;
 4 });
 5 console.log(newArr); // [2, 4, 6, 8]
```
#### 4. reduce
     reduce()方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
> 语法：
> array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
* total为初始值,或者计算结束后的返回值（必填）；
* currentValue为当前元素（必填）；
* currentIndex为当前元素的索引；
* arr为当前元素所属的数组对象；
* initialValue传递给函数的初始值；
```
举例：
var items = [10, 120, 1000];
var reducer = function add(sumSoFar, item) { return sumSoFar + item; };
var total = items.reduce(reducer, 0);
console.log(total);  // 1130
```
#### 5. fliter
     filter()方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
> 语法：
> array.filter(function(currentValue,index,arr), thisValue)
* filter()方法得参数与map()参数一致；
* 该方法不会改变原数组；
```
举例：
let arr = [1, 2, 3, 4];
let newArr = arr.filter(function(item) {
     if (item % 2 !== 0) {
        return item;
    } 
});
console.log(newArr); // [1, 3];
```
#### 6. some
     some()方法用于检测数组中的元素是否满足指定条件（函数提供）
> 语法：
> array.some(function(currentValue,index,arr),thisValue)
* 该方法参数与filter()方法一致；
* some() 方法会依次执行数组的每个元素，如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测，如果没有满足条件的元素，则返回false；
* some()方法不会改变原数组
```
举例：
var arr = [1,2,3,4,5];
var newArr = arr.some(function(item){
	return item > 4;
});
console.log(newArr); //true
```
#### 7. every
     every()方法用于检测数组所有元素是否都符合指定条件（通过函数提供）
>语法：
>array.every(function(currentValue,index,arr), thisValue)
* 该方法与some()方法得参数一致；
* every() 方法使用指定函数检测数组中的所有元素,如果数组中检测到有一个元素不满足，则整个表达式返回false，且剩余的元素不会再进行检测,如果所有元素都满足条件，则返回 true;
```
举例：
var arr = [1,2,3,4,5];
var newArr = arr.every(function(item){
	return item > 4;
});
console.log(newArr); //false
```


