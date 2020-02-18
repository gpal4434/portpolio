$(function(){
  $('#header .bottom .sub').hide();
  $('#header .arrow').hide();

  //header menu effect
  $('#header .bottom > ul li').mouseover(function(){
    $('#header .bottom .sub').show();
  });
  $('#header .bottom').mouseleave(function(){
    $('#header .bottom .sub').hide();
  });

  //sub menu 클릭시
  $('#header .bottom .sub li').click(function(){
    var index = $(this).parent().index();

    if($(this).hasClass('on')){

    }else{
      $(this).siblings().removeClass('on');
      $(this).parent().siblings().children().removeClass('on');
      $(this).addClass('on');
    }

    //scroll내렸을때 메뉴 fix되게하기
    var scroll;
    var lastScrollTop = 0;
    var delta = 5;
    var nav_h = $('#header').outerHeight();


    $(window).scroll(function(e){
      scroll = true;
    });


    setInterval(function(){
      if(scroll){
        action();
        scroll = false;
      }
    }, 250);

    function action(){
      var st = $(this).scrollTop();

      if(Math.abs(lastScrollTop - st) <= delta) return;

      if(st > lastScrollTop && st > nav_h){
        $('#header').removeClass('scroll_down').addClass('scroll_up');
      }else{
        if(st + $(window).height() < $(document).height()){
          $('#header').removeClass('scroll_up').addClass('scroll_down');
        }
      }
      lastScrollTop = st;
    }

    //top 글씨색 바꾸기
    $('#header .bottom > ul li').removeClass('on');
    $('#header .bottom > ul li').eq(index).addClass('on');

    //arrow btn 이동
    var ul_pos = $(this).parent().position().left;
    var center_pos = ul_pos + 128;
    $('#header .arrow').show().css('left', center_pos);
  });

  //main visual rolling
  $('#main_visual .nav_btn li').click(function(){
    var index2 = $(this).index();

    if($(this).hasClass('on')){

    }else{
      $('#main_visual .nav_btn li').removeClass();
      $(this).addClass('on');
      $('#main_visual .roll_img li').siblings().css('opacity','0');
      $('#main_visual .roll_img li').eq(index2).css('opacity','1');
    }
  });






  $.fn.ellipsis = function() { return this.each(function() { var el = $(this); if(el.css("overflow") == "hidden") { var text = el.html(); var multiline = el.hasClass('multiline'); var t = $(this.cloneNode(true)) .hide() .css('position', 'absolute') .css('overflow', 'visible') .width(multiline ? el.width() : 'auto') .height(multiline ? 'auto' : el.height()) ; el.after(t); function height() { return t.height() > el.height(); }; function width() { return t.width() > el.width(); }; var func = multiline ? height : width; while (text.length > 0 && func()) { text = text.substr(0, text.length - 1); t.html(text + "..."); } el.html(t.html()); t.remove(); } }); };
});
