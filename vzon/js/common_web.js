$(document).ready(function(){
     //dateTimePicker
    $("#dtBox").DateTimePicker({
		mode: "datetime",
		defaultDate: null,

		dateSeparator: "-",
		timeSeparator: ":",
		timeMeridiemSeparator: " ",
		dateTimeSeparator: " ",
		monthYearSeparator: " ",
		isPopup:true,
		minuteInterval: 30,
		roundOffMinutes: true,

		secondsInterval: 1,
		roundOffSeconds: true,

		showHeader: true,
		titleContentDate: "",
		titleContentTime: "",
		titleContentDateTime: "",

		buttonsToDisplay: ["HeaderCloseButton", "ClearButton", "SetButton"],
		setButtonContent: "설정",
		clearButtonContent: "취소",
    	incrementButtonContent: "+",
    	decrementButtonContent: "-",
		setValueInTextboxOnEveryClick: false,
		readonlyInputs: false,

		animationDuration: 400,

		minuteInterval: 30, //30분단위로 체크되는 것
        //language에 korean이 없어서 이렇게 설정해줘야합니다ㅠ
		shortDayNames: ["일", "월", "화", "수", "목", "금", "토"],
		fullDayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
		shortMonthNames: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
		fullMonthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],

        //아래 데이터형식 이렇게 하면 되는건데, 왜 안먹을깝숑 ㅠ
		dateTimeFormat: "yyyy-MM-dd HH:mm",
		dateFormat: "yyyy-MM-dd",
		timeFormat: "HH:mm",
	});
    //mCustomScrollbar
     $(".tb").mCustomScrollbar({
         theme:"minimal-dark",
         //theme:"rounded-dark",\
         scrollInertia: 200,
         mouseWheel:{ scrollAmount: 200 },
         scrollButtons:{ enable: true },
         axis: "y",
         autoExpandScrollbar: true,
         scrollbarPosition: "outside"
     });

    setTimeout(function(){
     $(".tb, .scroll").mCustomScrollbar({
         theme:"minimal-dark",
         //theme:"rounded-dark",\
         scrollInertia: 200,
         mouseWheel:{ scrollAmount: 200 },
         scrollButtons:{ enable: true },
         axis: "y",
         autoExpandScrollbar: true,
         scrollbarPosition: "outside"
     });
    }, 500);

    $(".tb2.scroll-x").mCustomScrollbar({
         theme:"minimal-dark",
         //theme:"rounded-dark",\
         scrollInertia: 200,
         mouseWheel:{ scrollAmount: 200 },
         axis: "x",
        mouseWheel:{ enable: false },
        callbacks: {
            whileScrolling: function(){
                var left = $(".tb2.scroll-x #mCSB_3_container").css('left');
                //$(".tb2.scroll-x #mCSB_3_container").css('left')
                $('.c-calendar .th2 table').css('left',left);
            }
        }
     });

    $(".scrollX").mCustomScrollbar({
         //theme:"rounded-dark",\
         scrollInertia: 200,
         mouseWheel:{ scrollAmount: 200 },
         axis: "x",
        scrollbarPosition: "inside"
     });

		$('.n-searchs .n-search .searchBtn .detailBtn').off('click').on('click', function(){
			if($(this).parent().parent().parent().hasClass('detail')){
				$(this).parent().parent().parent().removeClass('detail');
			}else{
				$(this).parent().parent().parent().addClass('detail');
			}

		});

    //selectBox
        var select = $(".custom-select select.select");
        select.change(function(){
            var select_name = $(this).children("option:selected").text();
            $(this).siblings("label").text(select_name);
        });


		var select1 = $(".n-selectbox select");
        select1.change(function(){
            var select_name = $(this).children("option:selected").text();
            $(this).siblings("label").text(select_name);
        });
	//Calendar
	$('.smallCalendar').datepicker({
        nextText: '',
        prevText: '',
        onSelect: function(date, inst){
          var _vm = "";
          _vm.curDate = new Date(date);
          if(_vm.type != 'dateOnly') _vm.view = 'clock';
        },
        showOtherMonths: true,
        selectOtherMonths: true
      });
    $.datepicker.setDefaults( $.datepicker.regional[ "ko" ] );

	// ie9 placeholder
	$('input, textarea').placeholder({customClass:'n-placeholder'});

	//header infos
	$('.userMenu').on('click', function(){
		$(this).parent().toggleClass('on');
	});
	$('.info .sub').on('mousedown', function(){
		$(this).parent().removeClass('on');
	});
	$('.info .btns > li:first-child').on('click', function(){
		$(this).toggleClass('on');
	});
	$('.info .btns > li:first-child .headerSearch').not().on('click', function(){
		$(this).parent().removeClass('on');
	});
    $('.info .btns > li:nth-child(2)').on('click', function(){
        $('.notice').toggleClass('show');
    });

	//depth1
	$('.n-wrap .depth1 li').click(function(){
		var index = $(this).index();
		$('.depth1 li').eq(index).addClass('on');
			$('.n-contents').addClass('left');
	});
	$('.n-wrap .depth1 li').click(function(){
	var index = $(this).index();
		$('.depth1 li').eq(index).removeClass('on');
			$('.n-contents').removeClass('left');
	});

	$('.n-wrap .depth1 li').on('click', function(){
		$(this).addClass('on');
		$(this).siblings().removeClass('on');
		$('.n-container.active').removeClass('active');
		$('.depth2 .menu-arrow').show(400);
	});

	//depth2
	$('.depth2-li').on('click', function(){
        $('.n-container').removeClass('active');
        $('.n-contents').removeClass('left');
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$('.depth3').removeClass('on');
		}else{
			$(this).removeClass('on');
			$(this).addClass('on');
			$('.depth3').addClass('on');
		}
	});

	//depth3
	$('.depth3 > ul > li').on('click', function(){
		if($(this).hasClass('on')){
			$(this).siblings().removeClass('on');
		}else{
			$(this).siblings().removeClass('on');
			$(this).addClass('on');
		}
	});

	//container menu toggle
	$('.n-container .header .menu-toggler').off('click').on('click', function(){
		if($(this).parent().parent().hasClass('active')){
			$(this).parent().parent().removeClass('active');
			$('.n-contents').removeClass('left');
		}else{
			$(this).parent().parent().removeClass('active');
			$(this).parent().parent().addClass('active');
			$('.n-contents').addClass('left');
		}
	});
	$('.n-container.active > .depth2 > ul > li').off('click').on('click', function(){
		$('.n-container').removeClass('active');
	});
	$('.n-container > .depth2 > ul > li').off('click').on('click', function(){
		$('.n-container').removeClass('active');
		$('.n-contents').removeClass('left');
	});

	//custom-select
	$('.custom-select .current').on('click', function(){
		$(this).parent().toggleClass('on');
	});
	$('.custom-select li').on('mouseover', function(){
		$('.custom-select.step2').addClass('on');
	});
   $('.custom-select.step2').on('click', function(){
       $('.custom-select').removeClass('on');
   });

	//switch toggle
	$('.switch input').click(function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
		}else{
			$(this).removeClass('on');
			$(this).addClass('on');
		}
	});
	$('.switch.priority input').click(function(){
		if($(this).hasClass('on')){
			$(this).siblings().text('긴급');
		}else{
			$(this).siblings().text('일반');
		}
	});
	$('.switch.yesno input').click(function(){
		if($(this).hasClass('on')){
			$(this).siblings().text('YES');
		}else{
			$(this).siblings().text('NO');
		}
	});
	$('.switch.overdue input').click(function(){
		if($(this).hasClass('on')){
			$(this).siblings().text('연체');
		}else{
			$(this).siblings().text('미연체');
		}
	});
	$('.switch.contract input').click(function(){
		if($(this).hasClass('on')){
			$(this).siblings().text('약정');
		}else{
			$(this).siblings().text('무약정');
		}
	});
	$('.switch.charge input').click(function(){
		if($(this).hasClass('on')){
			$(this).siblings().text('청구');
		}else{
			$(this).siblings().text('미청구');
		}
	});

	//담당자배정
//	$('.tree').on('click', function(){
//		if($(this).hasClass('on')){
//			$(this).removeClass('on');
//		}else{
//			$(this).removeClass('on');
//			$(this).addClass('on');
//		}
//	});
    $('.trees').find('.n-toggle').on('click', function(e){
        e.preventDefault();
        $(this).parent().toggleClass('on');
    });

	$('.addbtn').on('click', function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
		}else{
			$(this).removeClass('on');
			$(this).addClass('on');
		}
	});
	$('.pop_tooltipWrap > .cnt, .pop_tooltipWrap.single .addbtn').mouseover(function(){
		$('.pop_tooltipText, .pop_tooltipArrow').show();
	});
	$('.pop_tooltipWrap > .cnt, .pop_tooltipWrap.single .addbtn').mouseleave(function(){
		$('.pop_tooltipText, .pop_tooltipArrow').hide();
	});
//
//    $('.pop_tooltipWrap > span').mouseover(function(){
//		$('.pop_tooltipText, .pop_tooltipArrow').show();
//	});
//	$('.pop_tooltipWrap > span').mouseleave(function(){
//		$('.pop_tooltipText, .pop_tooltipArrow').hide();
//	});
//

    $('.addBtn').on('click', function(){
		$(this).siblings().removeClass('on');
		$(this).addClass('on');
		$('.addbtn').removeClass('on');
	});

	$('.timeSelect li').on('click', function(){
		$(this).siblings().removeClass('on');
		$(this).addClass('on');
		$('.addbtn').removeClass('on');
	});

	//일감현황 - 수행담당자/협업담당자 토글
	$('.arrow-toggle').off('click').on('click', function(){
		var index = $(this).parent().parent().parent().index();
		$('.n-section.tb .section2').eq(index).toggleClass('toggle');
	});

    //청구내역관리 - 전체보기
    $('.allbtn').on('click', function(){
        if($('.expend').hasClass('alls')){
            $('.expend').removeClass('alls');
        }else{
            $('.expend').removeClass('alls');
            $('.expend').addClass('alls');
        }
    });

    //CTI 수신목록 펼치기
    $('.callComb .list .toggle').on('click', function(){
        $('.callComb').addClass('on');
    });
    $('.dropdown .toggle2').on('click', function(){
        $('.callComb').removeClass('on');
    });
    $('.toggle-left').on('click', function(){
        $('.dropleft').toggleClass('on');
    });

    //CTI tooltip
    $('.callComb .cont .left .cnt').on('click', function(){
        $('.cti-tooltip.etc').toggleClass('on');
    });
    $('.callComb .cont .right .warning').on('click', function(){
        $('.cti-tooltip.warn').toggleClass('on');
    });

    //sortable
    $( "#sortable1, #sortable2,  #sortable3, #sortable4, #sortable5, #sortable6, #sortable7, #sortable8" ).sortable({
      connectWith: ".connectedSortable",
        handle: '.label',
        cursor: 'move'
    }).disableSelection();

    //청구계획현황
    $('.n-section.payplan .n-table .arrow-toggle').on('click', function(){
        $('.n-section.payplan .n-table + .n-table').toggleClass('off');
        $(this).toggleClass('off');
    });
    $('.n-tables.billData .arrow-toggle').on('click', function(){
        $('.n-tables.billData .n-table').toggleClass('off');
        $(this).toggleClass('off');
    });
    $('.n-tables.agreement .arrow-toggle').on('click', function(){
        $('.n-tables.agreement .n-table').toggleClass('off');
        $(this).toggleClass('off');
    });

    // 소요량산출
//    $('.n-button.requirementBtn').on('click', function(){
//       $(this).parent().parent().parent().parent().parent().parent().parent().toggleClass('folder');
//
//        if($(this).parent().parent().parent().parent().parent().parent().parent().hasClass('folder')){
//            $(this).text('소요량 닫기');
//        }
//        else{
//            $(this).text('소요량 보기');
//        }
//    });

    //첨부문서 보기
    $('#attachFile').on('click', function(){
        $(this).toggleClass('view');
    });

    //대표자 정보 삭제
    $('.n-button.trash').on('click', function(){
        $(this).parent().parent().parent().parent().parent().toggleClass('del');
    });


    //계약 외 상품 추가
    $('.prod .head').on('click', function(){
        $(this).parent().toggleClass('hide');
    });

    //계약 작성
    $('.switch input').on('click', function(){
        if($(this).hasClass('on')){ $(this).parent().parent().parent().parent().parent().removeClass('open');           $(this).parent().parent().parent().parent().parent().addClass('open');
        }else{ $(this).parent().parent().parent().parent().parent().removeClass('open');
        }
    });

    //입고
    $('.more').on('click', function(){
        if($(this).siblings().hasClass('open')){
            $(this).siblings().removeClass('open');
            $('.more span').text('더보기');
        }
        else{
            $(this).siblings().addClass('open');
            $('.more span').text('숨기기');
        }

    });

    //소속직원
    $('.ellip').on('click', function(){
        $('.ellip .sub').toggleClass('show');
    });

    //마이페이지
    $('.formBox .status.red.tip').on('click', function(){
        $(this).toggleClass('on');
    });

    //상세조건검색
    $('.n-searchs .box + .toggle').on('click', function(){
        if($('.box').hasClass('open')){
            $('.box').removeClass('open');
        }else{
            $('.box').addClass('open');
        }
    });
    $('.n-searchs .box li').on('click', function(){
        $(this).toggleClass('on');
    });
});
