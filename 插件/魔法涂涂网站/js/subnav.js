$(".nav-product").hover(function(){
	$(".sub").stop(true,true).slideDown();
});
$(".sub").mouseleave(function(){
	$(".sub").stop(true,true).slideUp();
});
