$(function () {
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
    });
})