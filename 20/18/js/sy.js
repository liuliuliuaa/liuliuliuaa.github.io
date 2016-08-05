
$(function(){
	//banner轮播 
	$("#banner").kxbdSuperMarquee({
    distance:1366,
    duration:20,
    direction: "left",
    time:3
	})



	// 回到顶部
	$("#top").click(function(){
		$("html,body").animate({"scrollTop":"0px"})
	});



	// 底部按钮变换
	
	$(".nainiu li").hover(function(){
		var a=$(this).attr("value");
		$(this).children("img").attr("src","images/f"+a+a+".png")
	},

	function(){
		var a=$(this).attr("value");
		$(this).children("img").attr("src","images/f"+a+".png")

	}



	);


	// 图片hover
	
$(".women_pic1 li,.women_pic2 li,.men_pic1 li,.men_pic2 li,.children_pic1 li,.children_pic2 li").hover(function() {
	$(this).children("span").fadeIn(500);



}, function() {
	$(this).children("span").fadeOut(500);
	
});

})
