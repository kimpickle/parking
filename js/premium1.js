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

    //예약구매 페이지 이동
    $(".text3").click(function(){
        window.open("premium2.html")
    })
});