$(function(){

  //=========¶¥²¿ÏÂÀ­=====================
  $('.has-c').hover(function(){
    $(this).find('.child').show();
  },function(){
    $(this).find('.child').hide();
  });

  //=========ÖÐ²¿Ò»Ò»¶ÔÓ¦=====================
  $('.z-item').each(function(i){
    $(this).data('index',i);
  });
  $('.z-item').hover(function(){
    $('.hide').stop();
    $(this).find('.hid').show(0,function(){
      $(this).animate({left:222},200);
    });
    var i = $(this).data('index');
    $('.zh-item').hide();
    $( $('.zh-item')[i] ).show();
    $('.y-item').hide();
    $( $('.y-item')[i] ).show()  ;
  },function(){
    $('.hide').stop();
    $(this).find('.hid').animate({left:212},20,function(){
      $(this).hide(0);
    });
  });

  //===========Â¥²ã¶¯»­====================
  $('.f-f').each(function(i){
    $(this).data('index',i);
  });
  $('.f-f').click(function(){
    var i = $(this).data('index');
    var newtop = $( $('.floor')[i] ).offset().top - 50;
    $({top: $(window).scrollTop()}).animate(
      {top: newtop},
      {
        duration: 700,
	      step: function() {
	         $(window).scrollTop(this.top);
	      }
      });
  });

  //===============²à±ßÀ¸Ð§¹û==========================
  $('.f-f').hover(function(){
    $('.f-f').stop();
    $(this).find('.f-h').show(0,function(){
      $(this).animate({left:80},200);
    });
  },function(){
    $('.f-f').stop();
    $(this).find('.f-h').css({left:120}).hide(0);
  });

  //=================Î¢Î¢×óÒÆ¶¯Ð§¹û============================
  $('.pic').hover(function(){
    $(this).css({position:'relative'});
    $(this).stop();
    $(this).animate({left:-10},200);
  },function(){
    $(this).stop();
    $(this).animate({left:0},200);
  });

  //====================ÂÖ²¥============================
  var index = 0;
  var lunbo  =  function(){
    $('.lunbo-item').hide();
    var el = $('.lunbo-item')[index];
    $(el).show();

    $('.zhishi-item').removeClass('red');
    $($('.zhishi-item')[index]).addClass('red');

    index += 1;
    if( index === $('.lunbo-item').length ){
      index = 0;
    }
  }
  $('.zhishi-item').each(function(i){
    $(this).data('index',i)
  });

  $('.zhishi-item').hover(function(){
    clearInterval(timerId);
    $('.zhishi-item').removeClass('red');
    $(this).addClass('red');
    var i = $(this).data('index');
    $('.lunbo-item').hide();
    $( $('.lunbo-item')[i] ).show();
    index = i;
  },function(){
    clearInterval(timerId);
    timerId = setInterval(lunbo,1000);
  });
  var timerId = setInterval(lunbo,1000);

  //============Í·²¿µ¼º½Ìõ==========================
  var ti;
  $(window).scroll(function(){
    if($(window).scrollTop() > 300){
      clearTimeout(ti);
      ti = setTimeout(function(){
	$('.fixtop').show();
      },500);
    }else{
      clearTimeout(ti);
      $('.fixtop').hide();
    };
  });

  
  //===============»Øµ½¶¥²¿===========================
  $(".totop").click(function(){
    $({top: $(window).scrollTop()}).animate(
      {top: 0},
      {
        duration: 700,
	step: function() {
	  $(window).scrollTop(this.top);
	}
      }
    );
  });

});
