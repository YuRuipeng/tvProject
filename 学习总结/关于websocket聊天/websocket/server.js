var fs = require("fs");
var http = require("http");

http.createServer(function(req,res){
    console.log(req.url)
    var fileName = "./www"+req.url;
    fs.readFile(fileName,function(err,data){
        if(err){
            res.write("404")
        }else{
            res.write(data)
        }
        res.end();
    })
}).listen(8088)

/**
 * Create websocket server.
 */
//启动websocket servers
require("./ws/wsserver");