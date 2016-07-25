$(function(){
   $(".banner_box").kxbdSuperMarquee({
     distance:960,
     time:5,
     direction:"left",
     navId:"#navpic",
     
   })


   $(".logo").hover(function(){
   	$(this).stop(true,true).removeClass("zoomInUp animated").addClass("zoomInUp animated");
   },function(){
   			$(this).removeClass("zoomInUp animated");
   })


function scrollC(obj,point){
  var p=0,
  time=setInterval(function(){
    if((p/360)*100<=point){
      if(p<=180){
        obj.find(".r").css({
          "transform":"rotate("+p+"deg)",
          "-moz-transform":"rotate("+p+"deg)",
          "-o-transform":"rotate("+p+"deg)",
          "-webkit-transform":"rotate("+p+"deg)",
          "-ms-transform":"rotate("+p+"deg)"
        });
      }else{
        obj.find(".l").css({
          "transform":"rotate("+(p-180)+"deg)",
          "-moz-transform":"rotate("+(p-180)+"deg)",
          "-webkit-transform":"rotate("+(p-180)+"deg)",
          "-o-transform":"rotate("+(p-180)+"deg)",
          "-ms-transform":"rotate("+(p-180)+"deg)"
        }); 
      };
      obj.find(".point").text(parseInt((p/360)*100)+"%");
      p+=5;
    }else{
      clearInterval(time);
    }
  },20);
};


$(".nengli ul li").waypoint(function(){
  if(!this.scrollC){//确保动画只有一次
    this.scrollC=true;
    scrollC($(this),parseInt($(this).find("div.ico .point").text()));
  }
},{offset:"70%"});


})
