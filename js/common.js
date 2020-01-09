$(function(){
  $('.menu_btn').on('click',function(){
    $('.swiper-slide#main nav .sub').fadeIn();
  });
  $('.menu_close').on('click',function(){
    $('.swiper-slide#main nav .sub').fadeOut();
  });

});
