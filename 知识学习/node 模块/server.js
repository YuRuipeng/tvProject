var http = require("http");
http.createServer(function(req,res){//response
	console.log(req,res)
    switch (req.url) {
        case "/":
            res.write("123")
            break;
        default:
        res.write("456")
            break;
    }
    res.end();
}).listen(8080);
