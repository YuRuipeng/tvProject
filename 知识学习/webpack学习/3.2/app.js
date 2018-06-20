import sum from "./sum"//es6
var minus = require("./minus")//commonjs
require(['./muti'],function(a,b){
    console.log('muti(2,3)',muti(2,3))
})
console.log('sum(23,24)=',sum(23,24))
console.log('minus(24,17)',minus(24,17))
