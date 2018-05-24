var fs = require("fs");
var http = require("http");
let path = require('path');




http.createServer(function(req,res){
    console.log(req.url)
    var fileName = "./www"+req.url;
    var path = req.url;
    fs.readFile(fileName,function(err,data){
        if(err){
            res.write("404")
        }else{
            res.write(data)
        }
        sendFile(res,path); 
        
    })
}).listen(8088)



function sendFile(res,path){  
    var path = process.cwd()+path;  
    fs.readFile(path,function(err,stdout,stderr){  
        if(!err){  
            var data = stdout;  
            var type = path.substr(path.lastIndexOf(".")+1,path.length)  
            res.writeHead(200,{'Content-type':"text/"+type});   //在这里设置文件类型，告诉浏览器解析方式
            res.write(data);  
        }  
        res.end();  
    })  
}  
