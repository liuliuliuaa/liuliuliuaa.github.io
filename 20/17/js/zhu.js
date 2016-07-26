$(function(){
// banne的轮播 
   $(".banner_box").kxbdSuperMarquee({
     distance:960,
     time:3,
     direction:"left",
     navId:"#navpic",
     
   })

// logo动画
   $(".logo, .lx_right img").hover(function(){
  $(this).addClass("rotateIn animated");

        },


    function(){
       $(this).removeClass("rotateIn animated");
   
   })

// 作品展示
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


$("#nengli ul li").waypoint(function(){
  if(!this.scrollC){//确保动画只有一次
    this.scrollC=true;
    scrollC($(this),parseInt($(this).find("div.ico .point").text()));
  }
},{offset:"70%"});




$(".zp_box").kxbdSuperMarquee({
     distance:960,
     time:3,
     direction:"left",
     navId:".zp_nav",
   })



 $(".nav li").click(function(){

                var b=$(this).attr("title");
                var a=$("#"+b).offset().top;
                $("html,body").animate({scrollTop:a},500);
            })





 $(window).scroll(function(){
               //获取滚动条的Top
               var a=$(document).scrollTop();
               if(a>=$("#box1").offset().top-300){
                   $("#box1").removeClass().addClass("zoomInLeft animated");
               }

           })


 

})





 




          