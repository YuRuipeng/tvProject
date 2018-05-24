$(function () {
    // $('.delete-swipeout').click(function () {
    //     $(this).parents('.weui-cell').remove()
    // });
    // $('.close-swipeout').click(function () {
    //     $(this).parents('.weui-cell').swipeout('close')
    // });
	// var videoObject = {
    //     container: '.m-eg-videoPlay-banner',//“#”代表容器的ID，“.”或“”代表容器的class
    //     variable: 'player',//该属性必需设置，值等于下面的new chplayer()的对象
    //     autoplay: false,//自动播放
    //     live:false,
    //     poster: '',
    //     video: '../img/杨宗纬 - 越过山丘 (致李宗盛).mp4'//视频地址
    // };
    // var player = new ckplayer(videoObject);
    var arr = [
        {"name":"apple", "count": 2},
        {"name":"orange", "count": 5},
        {"name":"pear", "count": 3},
        {"name":"orange", "count": 16},
    ];
        
    var newArr = arr.filter(function(item){
        return item.name === "orange";
    });
    
    
    console.log("Filter results:",newArr);
});