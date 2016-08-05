$(function(){
	// 产品展示图片
	var b;
  $("#main ul li img").hover(function() {
    b=$(this).attr("src");
     var a=$(this).attr("attr");
     $(this).attr("src","images/"+a+".JPG");
      
  }, function() {
     $(this).attr("src",b);
  
  });


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

	});


	// 搜索框点击改变宽度
	// 获得焦点
     $(".put1").focus(function(){
         $(this).animate({"width":"150px"})

     });
   // 失去焦点
    $(".put1").blur(function(){
         $(this).animate({"width":"120px"})

     });

	


})