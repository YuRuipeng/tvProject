/**
 * Created by Administrator on 2017/4/14.
 */
var websocket = require("ws");
var wss = new websocket.Server({ port: 8080 });

//当客户端 连接请求的时候， 回调函数就会执行
wss.on("connection",function(ws){


    //当客户端 发送数据的时候， 下面的回调函数会执行
    ws.on("message",function(data){
        //console.log(data);
        //广播所有的消息（遍历连接到server的所有客户端，给每个客户端发送这条消息）
        broadcast(ws,data);
    })


    // 服务端著主动给客户端发消息
    // ws.send("欢迎来到于瑞鹏的聊天室");
})

function broadcast(ws,data){
    // wss.clients 记录着 所有连接的客户端

    wss.clients.forEach(function(client,index){

        //不给自己发消息
        if(ws!==client){
            client.send(data);
        }
    })
}