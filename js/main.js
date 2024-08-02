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


	//이미지 슬라이드
	
	let imgNum = 0;

	setInterval(function(){
		if(imgNum<4){
			imgNum++;
		}else{
			imgNum=0;
		}
		let imgWidth = imgNum*(-600)+"px"
		$("#mainImg").animate({
			left:imgWidth
		}, 1000);
	}, 3000);
	
		

	//팝업창

    $(".close").click(function(){
        $("#popup").css({display:"none"})
    });

    $(window).scroll(function() {
        if($(this).scrollTop() >550 && $(this).scrollTop()<750){
             $("#popupMap, .black").stop().fadeIn(500);
        }else{$("#popupMap, .black").stop().fadeOut(500);}
    });

    $(".btn").click(function(){
        $("#popupMap").hide();
		$(".black").hide();
    });
	
});

