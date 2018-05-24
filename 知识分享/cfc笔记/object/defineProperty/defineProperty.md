### Object.defineProperty(obj, prop, descriptor)
#### 参数
- obj
> 要在其定义属性的对象
- prop
> 要定义和修改属性的名称
- descriptor
> 将被定义或修改的属性描述符
- 返回值
> 被传递给函数的对象
#### 属性描述符(数据描述符/存取描述符)
##### 共有键值
- configurable
> 当该属性的configurable设为true时，该属性可以被修改和删除，默认false
- enumerable
> enumerable为true时，该属性才可被枚举，默认false
##### 数据描述符独有键值
- value
> 该属性对应的值，可以为数值/对象/函数，默认undefined
- writable
> writable为true时，value值才能被赋值运算符改变，默认false
##### 存取描述符独有键值
- get
> 给属性提供getter方法，如果没有 getter 则为 undefined。该方法返回值被用作属性值，默认为 undefined
- set
> 给属性提供 setter 的方法，如果没有 setter 则为 undefined。该方法将接受唯一参数，并将该参数的新值分配给该属性,默认为 undefined

```
注意点： 如果一个描述符不具有value/writable/get/set任何一个键值，则默认为数据描述符，如果同时存在两种描述符独有键值，则报错
```