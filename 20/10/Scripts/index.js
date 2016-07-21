$(function(){
   $("#bigpic").kxbdSuperMarquee({
     distance:638,
     time:2,
     direction:"left",
     navId:"#nav",
     
   })
})


$(function(){
	$("#partner footer .icon .red").hover(function() {
		$(this).stop().fadeTo(500,0)
		
	}, function() {
		$(this).stop().fadeTo(500,1)
	});
})





	$(window).scroll(function(){
			var top=$(this).scrollTop();
				$("#header .navbox").css("top",top);						
		});









