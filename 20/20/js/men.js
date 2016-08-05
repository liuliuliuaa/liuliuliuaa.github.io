$(function(){
  // 搜索框
  	// 获得焦点
     $(".put1").focus(function(){
         $(this).animate({"width":"150px"})

     });
   // 失去焦点
    $(".put1").blur(function(){
         $(this).animate({"width":"120px"})

     });


    // hover改变图片
       var b;
    $("#main ul li img").hover(function() {
    	  b=$(this).attr("src");
    	 var a=$(this).attr("attr");
    	 $(this).attr("src","images/"+a+".JPG");

    }, function() {
    	$(this).attr("src",b);
    	
    });
b

})