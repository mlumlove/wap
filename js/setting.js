

//设置保存key-value，供客户端调用
$(function() {
	$(".setting-choose").on("click", function() {
		$(this).toggleClass("on");
		var key = $(this).attr("id");
	});
})