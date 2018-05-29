var Http = require("http");
var fs = require("fs");
var Url = require("url");

//req：请求 所有客户端的信息，包括？传参
//res：响应 返回内容和方法
//req.url目录加名称加传参的数据
var server = Http.createServer((req,res)=>{
    let {pathname,query} = Url.parse(req.url,true);//解构赋值
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By",' 3.2.1')
    res.setHeader('Content-type', 'application/json;charset=utf8');
    if (req.method == "OPTIONS")
    return res.end();


    
    //var list = fs.readFileSync("book.json")     同步读取到数据    操作数据

    function read(cb){
        fs.readFile("book.json",function(err,data){
            if(err){
                console.log(err)
            }else{
                cb(JSON.parse(data)) 
            }
        })
    }


    if(req.url === "/list"){
        switch(req.method)
        {
            case "PUT":
                console.log("put")
                //read(function(list){

                    // res.end(JSON.stringify({
                    //     "status": "success",
                    //     "result": {
                    //         "code": 200,
                    //         "msg": '返回成功',
                    //         "data": arr,
                    //     }    
                    // }))
                //})
                break;
            case "DELETE":
                //执行代码块 2
                console.log("DELETE")
                break;
            case "POST":
                console.log("POST")
            break;
            case "GET":
                //执行代码块 2
                console.log("GET")
            break;
            default:
                
        }
        
    }
})
server.listen(6666)