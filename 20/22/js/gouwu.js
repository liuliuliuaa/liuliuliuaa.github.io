$(function(){
     // 点击更换照片
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
	 $(".big_pic").jqueryzoom( {xzoom:360,yzoom:500,offset:30,  position: "right",});


	 // 尺码为空
	  $(".gouwuche").click(function(){
	  	var a=$(".chi").val();
	     
	    if(a=="0"){
              $(".xuanze1 p").show();
	    }
	    else{
	    	$(".xuanze1 p").hide();
	    }
          return false;
	  });
	$(".chi").change(function() {
			var a=$(".chi").val();
		   if(a=="0"){
              $(".xuanze1 p").show();
	    }
	    else{
	    	$(".xuanze1 p").hide();
	    }
	});



       //选择数量
		  $(".gouwuche").click(function(){
	  	var a=$(".shu").val();
	     
	    if(a=="0"){
              $(".shu1 p").show();
	    }
	    else{
	    	$(".shu1 p").hide();
	    }
          return false;
	  });
	$(".shu").change(function() {
			var a=$(".shu").val();
		   if(a=="0"){
              $(".shu1 p").show();
	    }
	    else{
	    	$(".shu1 p").hide();
	    }
	});
	 
	 
})
