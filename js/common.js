// JavaScript Document

$(document).ready(function () {

	
	// 메인슬라이드
    $(".slide").bxSlider({
        auto: true,
		pager:false,
		controls:false
    });
	
	
	// 모바일 메뉴    
    $(".m_menu").click(function () {
		$(".mgnb_wrap").animate({
            left: '0'
		});
    });

    $(".close").click(function () {
		$(".mgnb_wrap").animate({
            left: '100%'
		});
    });

	
	

	// 메인슬라이드
    $(".m_movie").bxSlider({
        auto: false,
		pager:false,
		controls:false
    });
	
	
	$(".m_concert").bxSlider({
        auto: true,
		pager:false,
		controls:false
    });
	
	
	$(".m_popup").bxSlider({
        auto: true,
		pager:false,
		controls:false
    });
	
	
    //스크롤트리거
    $(window).scroll(function () {
        $('.ani_stop').each(function () {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() * .3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).removeClass('ani_stop');
            }
            if (bottom_of_window < bottom_of_object) {
                $(this).addClass('ani_stop');
            }
        });
    });


	$('.concert_this').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.concert_prog'
	});
	$('.concert_prog').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.concert_this',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		autoplay:true,
		variableWidth: true
	});
	

	
	
	
	
	


    // 모바일 메뉴    
    $(".m_menu").click(function () {
        $(".mgnb_wrap").animate({
            left: '0'
        });
    });

    $(".close").click(function () {
        $(".mgnb_wrap").animate({
            left: '100%'
        });
    });



    // 아코디언 슬라이드
    var m = matchMedia("screen and (min-width:1024px)");
    if (m.matches) {
        $("#room .inner ul li:nth-child(1)").addClass("active");
        $("#room .inner ul li").mouseenter(function () {
            $(this).addClass("active").siblings().removeClass("active");
        });
    } else {
        $("#room .inner ul li").removeClass("active");
    }



});
