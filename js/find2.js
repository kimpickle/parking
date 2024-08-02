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

    //무료 주차장 이미지

    $(window).scroll(function() {
        if($(this).scrollTop() >1100){
             $(".member .one").delay().fadeIn(1000);
             $(".member .two").delay(300).fadeIn(1000);
             $(".member .three").delay(600).fadeIn(1000);
        }else if($(this).scrollTop() <700){
            $(".member li").css({display:"none"});          
        }
    });    
	
	
	$(".one:nth-of-type(1) img").mouseenter(function(){
		$(".one:nth-of-type(1) p").css("color","#FFAA00");
	});
	
	$(".one:nth-of-type(1) img").mouseleave(function(){
		$(".one:nth-of-type(1) p").css("color","#242424");
	});
	
	$(".one:nth-of-type(2) img").mouseenter(function(){
		$(".one:nth-of-type(2) p").css("color","#FFAA00");
	});
	
	$(".one:nth-of-type(2) img").mouseleave(function(){
		$(".one:nth-of-type(2) p").css("color","#242424");
	});
	
	$(".one:nth-of-type(3) img").mouseenter(function(){
		$(".one:nth-of-type(3) p").css("color","#FFAA00");
	});
	
	$(".one:nth-of-type(3) img").mouseleave(function(){
		$(".one:nth-of-type(3) p").css("color","#242424");
	});
	
	
	$(".two:nth-of-type(4) img").mouseenter(function(){
		$(".two:nth-of-type(4) p").css("color","#FFAA00");
	});
	
	$(".two:nth-of-type(4) img").mouseleave(function(){
		$(".two:nth-of-type(4) p").css("color","#242424");
	});
	
	$(".two:nth-of-type(5) img").mouseenter(function(){
		$(".two:nth-of-type(5) p").css("color","#FFAA00");
	});
	
	$(".two:nth-of-type(5) img").mouseleave(function(){
		$(".two:nth-of-type(5) p").css("color","#242424");
	});
	
	$(".two:nth-of-type(6) img").mouseenter(function(){
		$(".two:nth-of-type(6) p").css("color","#FFAA00");
	});
	
	$(".two:nth-of-type(6) img").mouseleave(function(){
		$(".two:nth-of-type(6) p").css("color","#242424");
	});
	
	
	$(".three:nth-of-type(7) img").mouseenter(function(){
		$(".three:nth-of-type(7) p").css("color","#FFAA00");
	});
	
	$(".three:nth-of-type(7) img").mouseleave(function(){
		$(".three:nth-of-type(7) p").css("color","#242424");
	});
	
	$(".three:nth-of-type(8) img").mouseenter(function(){
		$(".three:nth-of-type(8) p").css("color","#FFAA00");
	});
	
	$(".three:nth-of-type(8) img").mouseleave(function(){
		$(".three:nth-of-type(8) p").css("color","#242424");
	});
	
	$(".three:nth-of-type(9) img").mouseenter(function(){
		$(".three:nth-of-type(9) p").css("color","#FFAA00");
	});
	
	$(".three:nth-of-type(9) img").mouseleave(function(){
		$(".three:nth-of-type(9) p").css("color","#242424");
	});
});