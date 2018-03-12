//举报弹窗
$(function(){
	$(".dt_list .dt_tips,.dr_lsit .dt_tips").click(function(event){
		event.stopPropagation();
		$(".tipBox").show();
		$(".ex_zhezhao").animate({opacity:'show',height:$(document).height()},500);
		
		});
		
	$(".tipBox ul li").click(function(event){
		event.stopPropagation();
		$(".tipBox").hide();
		$(".ex_zhezhao").animate({opacity:'hide'},500);
		});
		
	$(".tipBox p.qx").click(function(){
		$(".tipBox").hide();
		$(".ex_zhezhao").animate({opacity:'hide'},500);
		});	
		
	$(document).on("touchend click",function(){	
		$(".tipBox").hide();
		$(".ex_zhezhao").hide();
    });	
	});
