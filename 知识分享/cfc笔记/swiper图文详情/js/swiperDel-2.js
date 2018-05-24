var swiperDel = {
    data:{
        txtArray:['这是详情1','这是详情2','这是详情3']
    },
    init:function(){
        this.swiper()
    },
    swiper:function(){
        var swiper = new Swiper('.swiper-container', {
            observer: true,
            observeParents: true,
            slidesPerView: "auto",
            spaceBetween: 0,
            centeredSlides: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            on: {
                slideChangeTransitionEnd:function(swiper){ 
                    console.log(this.activeIndex); 
                    for(var i=0;i<swiperDel.data.txtArray.length;i++){
                        if(this.activeIndex==i){
                            $('.swiper-lateText p').text(swiperDel.data.txtArray[i]);
                            console.log(swiperDel.data.txtArray[i]);
                            // imageTextDel1.data.swiperText = imageTextDel1.data.txtArray[i];
                        }
                    }
                } 
            },
        });
    }
}
$(function(){
    swiperDel.init();
})