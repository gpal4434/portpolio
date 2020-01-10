$(document).ready(function(){

    // slide popup menu
    $('.c-header__function--menu').on('click', function(){
        $('.c-spops').show();
    });
    $('.c-spop__header').on('click', function(){
        $('.c-spops').hide();
    });

	// gnb
	$('.c-gnb__link').on('click', function(){
		$('.c-gnb__item').removeClass('c-gnb__item--active');
		$(this).parent().addClass('c-gnb__item--active');
	});



	// depth
	$('.c-depth__link').on('click', function(){
		$('.c-depth__item').removeClass('c-depth__item--active');
		$(this).parent().addClass('c-depth__item--active');
	});

	if ( $('.c-depth2 .c-depth__item').length < 4 ){
		$('.c-depth2 .c-depth__list').addClass('c-depth__list--left');
	}else {
		$('.c-depth2 .c-depth__list').removeClass('c-depth__list--left');
	}


	// drawer
	$('.c-drawer__trigger').on('click touchstart', function(){
		$('html').addClass('is-drawer-open');
		$('.c-drawer').addClass('c-drawer--active');

		return false;
	});

	// drawer close
	$('.c-drawer').on('click touchstart', function(){
		if (event.target == this) {
			$('html').removeClass('is-drawer-open');
			$('.c-drawer').removeClass('c-drawer--active');
		}
	});

	// 넓이 자동조절(%)
	autoWidth('c-tab','c-tab__item');
	autoWidth('c-drawer__buttons','c-drawer__button');

	// accordion
 	$('.c-accordions').find('.c-toggle').on('click', function(e){
        e.preventDefault();
            $(this).parent().toggleClass('c-accordion--active');
	});

	//	 input placeholder
	var forms;
	forms = $('input'), $('textarea');
	forms.placeholder();

	// textarea count
	$('.textarea__box').each(function(e){
		$(this).find('.c-form__textarea').keyup(function () {
			var max = 200;
			var len = $(this).val().length;
			if (len >= max+1) {
				this.value = this.value.substring(0, max);
			} else {
				$(this).parents('.textarea__box').find('.textarea__count').text('('+len+'/200)');
			}
		});
	});

	// popup close
	$('.c-popup').on('click touchstart', function(){
		if (event.target == this) {
			$('html').removeClass('is-popup-open');
			$('.c-popup').removeClass('c-popup--active');
		}
	});

	// 더보기 클릭 시 추가 버튼
	$('.c-more__button').on('click', function(){
		if( $(this).next().is('.c-more__add')){
			$('.c-more__add').toggleClass('c-more__add--active');
		}
	});
	$('.c-more').on('focusout', function(){
		$('.c-more__add').removeClass('c-more__add--active');
	});

	// c-guide__key--trigger
	$('.c-guide__key--trigger').each(function(){
		$(this).on('click', function(){
			$(this).toggleClass('c-guide__key--active');
			if ( $(this).next('.c-guide__target').hasClass('c-guide__target--active')){
				$('.c-guide__target').removeClass('c-guide__target--active');
			}else {
				$(this).next('.c-guide__target').addClass('c-guide__target--active');
			}
			return false;
		});
	});

	// t-depth
	$('.t-depth__link').on('click', function(){
		$('.t-depth__item').removeClass('t-depth__item--active');
		$(this).parent().addClass('t-depth__item--active');
	});



    // c-tab
    $('.c-tab').find('.c-tab__item').on('click', function(){});


	// c-tab-2
	$('.c-tabs-2').each(function(){
        if ( $(this).parent().hasClass('c-tabs-2__group')){
			$(this).find('.c-tab-2__link').on('click', function(){
				if ( $(this).parent().hasClass('c-tab-2__item--active')){
					$(this).parent().removeClass('c-tab-2__item--active');
				}else {
					$(this).parent().addClass('c-tab-2__item--active');
				}
				return false;
			});
		}else {
			$(this).find('.c-tab-2__link').on('click', function(){
	        $(this).parent().parent().parent().find('.c-tab-2__item').removeClass('c-tab-2__item--active');
			$(this).parent().addClass('c-tab-2__item--active');

				return false;
			});
		}
	});

    $('.c-tab-2__item').find('.c-tab-2__link').on('click', function(){
        if($(this).hasClass('c-tab-2__item--graph')){
            $('.c-section--table').hide();
            $('.c-section--graph').show();
        }else{
             $('.c-section--graph').hide();
            $('.c-section--table').show();
        }
     });

        $('.c-tab-2__item').find('.c-tab-2__link').on('click', function(){
        if($(this).parent().hasClass('c-tab-2__item--name')){
            $('.c-search__box--name').show();
            $('.c-search__box--paper').hide();
            $('.c-search__box--date').hide();
        }else if($(this).parent().hasClass('c-tab-2__item--paper')){
            $('.c-search__box--name').hide();
            $('.c-search__box--paper').show();
            $('.c-search__box--date').hide();
        }else{
            $('.c-search__box--name').hide();
            $('.c-search__box--paper').hide();
            $('.c-search__box--date').show();
        }
    });

    //$('.c-tab-2__item').eq(0).find('.c-tab-2__link').trigger('click');

    //c-tab-2__item c-tab-2__item--active c-tab-2__item--table
    //console.log($('.c-tab-2__item--table'));
    //$('.c-tab-2__item--table > .c-tab-2__link').on('click', function(){
    //    if($(this).parent().hasClass('c-tab-2__item--active')){
     //       $('.c-section--table').css('display', 'block');
     //   }
   // });


	// 전체선택
	$('.c-guide__all-check').on('click', function(){
		var checkLength = $('input:checkbox').length,
			  checkedLength = $('input:checkbox:checked').length;
		if ( $(this).hasClass('c-guide__all-check--active')){
			$(this).removeClass('c-guide__all-check--active');
			$('input:checkbox').prop('checked',false);
		}else {
			$(this).addClass('c-guide__all-check--active');
			$('input:checkbox').prop('checked',true);
			if ( checkLength == checkedLength){
				$(this).removeClass('c-guide__all-check--active');
				$('input:checkbox').prop('checked',false);
			}
		}
	});

	// c-search__box
	$('.c-search__box').on('click', function(){
		$(this).find('.c-search__result').toggleClass('c-search__result--active');
	});

	// more
	$('.c-more').parents('.wrap').addClass('wrap--more');

	// feedback
	$('.feedback').each(function(){
		$(this).on('click', function(){
			$(this).toggleClass('feedback--active');
			if ($(this).hasClass('feedback--active')){
				$(this).text('YES');
			}else {
				$(this).text('NO');
			}

			return false;
		});
	});

    // smenu
    $('.smenu__key, .smenu__list').on('click', function(){
            $(this).toggleClass('smenu__toggle--active');
    });
    $('.smenu__depth').find('.smenu__key, .smenu__list').on('click', function(e){
        e.preventDefault();
            $(this).parent().toggleClass('smenu__depth--active');
	});

    $('.c-h1').on('click', function(){
        $('.smodal').addClass('smodal--active');
        $('.navigation_wrap').addClass('active');
    });
    $('.navigation_wrap').on('click', function(){
        $(this).removeClass('active');
    });

    $('.alarm').on('click', function(){
        $('.navigation_wrap2').addClass('active');
    });
    $('.navigation_wrap2').on('click', function(){
        $(this).removeClass('active');
    });


	// c-guide__slide-trigger
	$('.c-guide__slide-trigger').each(function(){
		$(this).on('click', function(){
			$(this).parents('.c-guide__slides').toggleClass('c-guide__slides--active');

			return false;
		});
	});

    // c-check-3-big
    $('.c-check-3-big').on('click', function(){
		$(this).toggleClass('c-check-3--checked-big');
	});
});


function fixedHeader() {
	var headerHeight = $('.c-header').height();
    $('.c-content').css('height','calc(100% - ' + headerHeight +'px)');
}

function popup(target) {
	$('html').addClass('is-popup-open');
	$('#'+target).addClass('c-popup--active');
}
function autoWidth(targetParent, target) {
	$('.'+targetParent).each(function(){
		var thisLength = $(this).find('.'+target).length;
		$(this).find('.'+target).css('width', (100 / thisLength)+'%');
	});

    //추가 정보 입력
    $('.c-tip').on('click', function(){
       $(this).parent().parent().siblings().find('.addInfo').addClass('box');
    });
}
