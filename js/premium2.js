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
	
	jQuery('input[type="checkbox"]').change(function(){
		
		var $this = jQuery(this);
		var $nextLabel = $this.next("h4");
		if($this.is(":checked")){
			$nextLabel.css("color","#FFAA00");
		}else{
			$nextLabel.css("color","#242424");
		}
			
	});
});