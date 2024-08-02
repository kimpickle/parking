$(function(){
	
	//메인 메뉴 하이라이트
    $(".find, .voucher, .premium").mouseenter(function(){
        $("#header").stop().animate({
            height:150
        });
    });
    $(".sub").mouseleave(function(){
        $("#header").stop().animate({
            height:100
        });
    });

    //메뉴
	let trigger = $('#menu');
	let menu = $('.menuList');
	
	$(trigger).on('click', function(e){
		e.preventDefault();
		menu.slideToggle();
	});    

});