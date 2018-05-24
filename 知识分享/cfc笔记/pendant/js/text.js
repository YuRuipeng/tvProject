function ajax({url='../json/IndexSuperList.json',type='get',dataType='json'}){
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open(type,url,true);
        xhr.onload=function(){
            if (xhr.status == 200) {  
                try {  
                    var response = JSON.parse(xhr.response);  
                    resolve(response);  
                } catch (e) {  
                    reject(e);  
                }  
            } else {  
                reject(new Error(shr.status));  
            }  
        }
        xhr.onerror=function(err){
            reject(err);
        }
        xhr.send();
    })
}
ajax('../json/IndexSuperList.json').then(function(res){
    console.log(res);
}).catch(function(err){
    
})

// Promise -> 专门解决回调问题的原生方法 -> new Promise
// 它有两个参数分别是 resolve,reject,这两个都是函数
// resolve -> 成功态
// reject -> 失败态