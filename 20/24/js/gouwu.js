$(function(){
	// 底部按钮更换
   $(".nainiu li").hover(function(){
		var a=$(this).attr("value");
		$(this).children("img").attr("src","images/f"+a+a+".png")
	},

	function(){
		var a=$(this).attr("value");
		$(this).children("img").attr("src","images/f"+a+".png")

	});


   


})