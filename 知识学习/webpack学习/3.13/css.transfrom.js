module.exports = function(css){
    console.log(css)
    console.log(window.innerWidth)
    if(window.innerWidth>766){
        return css.replace("red","yellow")
    }else{
      
            return css.replace("red","#000")
        
    }
    
}