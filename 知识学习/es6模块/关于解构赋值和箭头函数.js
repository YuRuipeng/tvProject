
//解构赋值
//  如果数据复杂,需要深度解构,需要注意一点就是左右两边一一对应
// 如果对象里没有对应的部分,可以设置默认值
// 

let [,{address:[,d]},h='ssss'] = [{ a: 'szr' }, {address:[1, 2, 3], b:3 }]
console.log(d,h)


// 箭头函数函数
//如果直接返回的是对象类型,需要小括号包裹一下




function a(c) {
return function (d) {
	return {sum:c + d};
	}
}


let a =(c)=>{
	 (d)=>{
		return
	}
}


let a = c => d => ({sum:c + d})