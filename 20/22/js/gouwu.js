$(function(){

	$(".main_left ul li").click(function(){
       var a=$(this).attr("attr");
       $(".big_pic img").attr("src","images/"+a+".JPG");
       $(".big_pic img").attr("jqimg","images/"+a+"b.JPG")

	});


	// 底部按钮变换
	
	$(".nainiu li").hover(function(){
		var a=$(this).attr("value");
		$(this).children("img").attr("src","images/f"+a+a+".png")
	},

	function(){
		var a=$(this).attr("value");
		$(this).children("img").attr("src","images/f"+a+".png")

	});



	// 放大镜
	 $(".big_pic").jqueryzoom( {xzoom:360,yzoom:500,offset:50,  position: "right",});


	 // 尺码为空
	 
	 
})
