$(function(){
	var b;
  $("#main ul li img").hover(function() {
    b=$(this).attr("src");
  	console.log(b);
     var a=$(this).attr("attr");
     $(this).attr("src","images/"+a+".JPG");
      
  }, function() {
     $(this).attr("src",b);
  
  });
})