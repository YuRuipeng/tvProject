var fs = require("fs");
// 读文件 fs.readFile(文件名，回调函数)
// 写文件 fs.writeFile(文件名，文件内容 ，回调函数)
fs.readFile("fsdemo.txt",function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data.toString())
    }
})

fs.writeFile("fsdemo.txt","6666666666",function(err){

})
