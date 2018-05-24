var ejs = require("ejs")
ejs.renderFile("./demo.ejs",{info:"1231231",arr:[1,2,3]},function(err,data){
    console.log(data)
})