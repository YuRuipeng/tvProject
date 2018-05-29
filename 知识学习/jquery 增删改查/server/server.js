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
        fs.readFile("list.json",function(err,data){
            if(err){
                console.log(err)
            }else{
                cb(JSON.parse(data)) 
            }
        })
    }
    //console.log(pathname)
    switch(pathname){
        case "/getlist":
            //查找用户信息
            if(req.method==="GET"){
                read(function(list){
                    res.end(JSON.stringify({
                        "status": "success",
                        "result": {
                            "code": 10002,
                            "msg": '返回成功',
                            "data": list,
                        }    
                    }))
                })
            }else{
                res.end(JSON.stringify({
                    "status": "fail",
                    "result": {
                        "code": 10001,
                        "msg": '返回失败',
                        "data": [],
                    }    
                }))
            }
            break;
        case "/getInfo":
            //查找单个用户信息
            if(req.method==="GET"){
                //console.log(query)
                read(function(list){
                    var arr = list.filter((item,index)=>{
                        return item.id == query.id
                    })
                    res.end(JSON.stringify({
                        "status": "success",
                        "result": {
                            "code": 10002,
                            "msg": '返回成功',
                            "data": arr,
                        }    
                    }))
                })
            }else{
                res.end(JSON.stringify({
                    "status": "fail",
                    "result": {
                        "code": 10001,
                        "msg": '返回失败',
                        "data": [],
                    }    
                }))
            }
        break;
        case "/addInfo":
            //增加用户信息
            if(req.method==="POST"){

            }else{
                
            }
        break;
        case "/changeInfo":
            //修改某个用户信息
            //增加用户信息
            if(req.method==="POST"){
               
                var data = '';
                req.on('data', function (chunk) {
                    data += chunk;
                });
                req.on('end', function () {
                    data = decodeURI(data);
                    var list = JSON.parse(data)
                    console.log(data)
                })
                // read(function(list){
                //     var arr = list.filter((item,index)=>{
                //         return item.id != query.id
                //     })
                //     arr.map((item,index)=>{
                        
                //         item.id=index+1
                //     })
                //     fs.writeFile("list.json",JSON.stringify(arr),function(err){

                //     })
                //     res.end(JSON.stringify({
                //         "status": "success",
                //         "result": {
                //             "code": 10002,
                //             "msg": '返回成功',
                //             "data": arr,
                //         }    
                //     }))
                // })
            }else{
                res.end(JSON.stringify({
                    "status": "fail",
                    "result": {
                        "code": 10001,
                        "msg": '返回失败',
                        "data": [],
                    }    
                }))
            }
        break;
        case "/removeInfo":
            //删除某个用户信息 
            if(req.method==="GET"){
                //console.log(query)
                read(function(list){
                    var arr = list.filter((item,index)=>{
                        return item.id != query.id
                    })
                    arr.map((item,index)=>{

                        item.id=index+1
                    })
                    fs.writeFile("list.json",JSON.stringify(arr),function(err){

                    })
                    res.end(JSON.stringify({
                        "status": "success",
                        "result": {
                            "code": 10002,
                            "msg": '返回成功',
                            "data": arr,
                        }    
                    }))
                })
            }else{
                res.end(JSON.stringify({
                    "status": "fail",
                    "result": {
                        "code": 10001,
                        "msg": '返回失败',
                        "data": [],
                    }    
                }))
            }
        break;
        
    }
})
server.listen(8000);