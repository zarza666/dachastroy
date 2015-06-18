var app = {
    init: function ()
    {
		$('#content-tabs-before a').mousedown(function(){
			return false;
		});
		$('#content-tabs-after a').mousedown(function(){
			return false;
		});
		$('.content-tabs-before').click (function(){
            var srcContTabsImg = $(this).find('a').attr('href');
            $(this).parent().find('.content-tabs-image').attr({'src': srcContTabsImg});
            $(this).parent().find('.content-tabs-after').removeClass('content-tabs-after-active');
            $(this).addClass('content-tabs-before-active');
            return false;
        });
		$('.content-tabs-after').click (function(){
            var srcContTabsImg = $(this).find('a').attr('href');
            $(this).parent().find('.content-tabs-image').attr({'src': srcContTabsImg});
            $(this).parent().find('.content-tabs-before').removeClass('content-tabs-before-active');
            $(this).addClass('content-tabs-after-active');
            return false;
        });
		
        $('h3, span').mousedown(function(){
            return false;
        });

        $('.acr-mainp-content').hide();
        $('.acr-mainp-tegline').hover( function() {
                $(this).stop().animate({'opacity':'0.8'});
            },
            function() {
                $(this).stop().animate({'opacity':'1'});
            });
        $('.acr-mainp-tegline').css({'cursor':'pointer'});
        $('.acr-mainp-tegline').click(function()
        {
            var contentBlock = $(this).next('.acr-mainp-content');

            if (contentBlock.css('display') == 'none')
            {
                contentBlock.slideDown(600, 'easeInOutCirc');
                $(this).find('.status-button').css({'background-image':'url("/images/dachastroy/status-minus-button.png")'});
            }
            else
            {
                contentBlock.slideUp(600, 'easeInOutCirc');
                $(this).find('.status-button').css({'background-image':'url("/images/dachastroy/status-equal-button.png")'});
            }
        });

        $('.price-acr-tegline').css({'cursor':'pointer'});
        $('.price-acr-tegline').click(function()
        {
            var contentBlock = $(this).next();

            if (contentBlock.css('display') == 'none')
            {
                contentBlock.slideDown(600, 'easeInOutCirc');
                if($(this).find('.price-acr-tegline'))
                    $(this).find('.status-button2').css({'background-image':'url("/images/dachastroy/status-minus-button2.png")'});
            }
            else
            {
                contentBlock.slideUp(600, 'easeInOutCirc');
                if($(this).find('.price-acr-tegline'))
                    $(this).find('.status-button2').css({'background-image':'url("/images/dachastroy/status-equal-button2.png")'});
            }
        });
        $('.product_inacord_title').click(function () {
            if($(this).next('.product_acord_block').css('display') == 'none') {
                $(this).next('.product_acord_block').slideDown(600);
                $(this).find('.status-button2').css({'background-image':'url("/images/dachastroy/status-minus-button2.png")'});
            }
            else {
                $(this).next('.product_acord_block').slideUp(600);
                $(this).find('.status-button2').css({'background-image':'url("/images/dachastroy/status-equal-button2.png")'});
            }
        });
        $('.product_acrord_item').each(function () {
            var pps = 1;
            $(this).find('.product_acord_block .acr-content-tabs li a').each( function () {
                $(this).attr({'data-vall': pps});
                $('.product_inacord_container .product_inacord_item:nth-child('+pps+')').attr({'data-key':pps});
                pps++;    
            });
        });
        $('.product_acord_block .acr-content-tabs li a').click(function () {
            if($(this).hasClass('active')) {
                return false;
            }
            $(this).closest('.acr-content-tabs').find('.active').removeClass('active');
            $(this).addClass('active');
            var curIt = $(this).data('vall');
            $(this).closest('.product_acord_block').find('.product_inacord_item.active').slideUp(400).removeClass('active');
            $(this).closest('.product_acord_block').find('.product_inacord_item[data-key="'+curIt+'"]').slideDown(400).addClass('active');
            return false;
        });



    },
}
function sweetcolor () 
{
    var marginSlide = 0
    var currentSlide = 0;
    var firstSlide = '';
    var countSlides = 0;
    var leghtSlider = 0;
    var equals = '-';
    var scArrowPrev = 1;
    if ($(window).width() >= 1030) {
        var scArrowNext = 3;
    }
    else if ($(window).width() >= 770) {
        var scArrowNext = 2;
    }
    else if ($(window).width() <= 770) {
        var scArrowNext = 1;
    }
    if ($(window).width() >= 770) {
        var margStep = 327;
        $('.sweetcolor-item-img-circle').fadeOut(0);
    }
    else {
       var margStep = 320;
        $('.sweetcolor-item').addClass('sweetcolor-item-active');
        $('.sweetcolor-item-active').find('.sweetcolor-item-img-circle').fadeIn(300);           
    }   
    $('.sweetcolor-item-img-annot').css({'display':'none'});
    $('.sweetcolor-item').each( function () 
    {
        countSlides++;
    }); 
    /* íàâèãàöèÿ */
    
    $('.swetcolor-next').click(function () 
    {
        if ((currentSlide + scArrowNext) == countSlides) {
            return false;
        }
        currentSlide++;
        equals = '-';
        marginSlide = currentSlide  * margStep;
        $('.sweetcolor-items').animate({'left': equals +marginSlide +'px' }, 300);
        if (currentSlide >= scArrowPrev) {
            $('.swetcolor-prev-inactive').removeClass('swetcolor-prev-inactive').addClass('swetcolor-prev');
        }
        if ((currentSlide + scArrowNext)  == countSlides) {
            $(this).removeClass('swetcolor-next').addClass('swetcolor-next-inactive');
        }
    });
    $('.swetcolor-prev').click(function () 
    {
        if (currentSlide == 0) {
            return false;
        }
        currentSlide--;
        equals = '+';
        marginSlide = currentSlide * margStep;
        equals = '-';
        if ((currentSlide - scArrowPrev) <= countSlides) 
        {
            $('.swetcolor-next-inactive').removeClass('swetcolor-next-inactive').addClass('swetcolor-next');
        }
        if (currentSlide  < 1) 
        {
            $(this).removeClass('swetcolor-prev').addClass('swetcolor-prev-inactive');
        }
        $('.sweetcolor-items').animate({'left': equals +marginSlide +'px' }, 300);
    });
    
    /* íàâåäåíèå íà äîì*/
    $('.sweetcolor-item').mouseenter( function () 
    {
        if ($(window).width() >= 770) {
            $(this).addClass('sweetcolor-item-active');
            $('.sweetcolor-item-active').find('.sweetcolor-item-img-circle').fadeIn(300);
        }
    });
    $('.sweetcolor-item').mouseleave( function () 
    {
        if ($(window).width() >= 770) {
            $(this).removeClass('sweetcolor-item-active').find('.sweetcolor-item-img-circle').fadeOut(100);
        }
    });
    /* ïîÿâëÿþùàÿñÿ íàäïèñü íàä êðóæêîì */
    $('.sweetcolor-item-img-circle').hover( function () {
        $(this).next('.sweetcolor-item-img-annot').css({'display':'block'});
    },
    function () {
     $(this).next('.sweetcolor-item-img-annot').css({'display':'none'});
    });
        
        
    $(window).resize(function () 
    {
        if ($(window).width() >= 770) {
             margStep = 327;
             marginSlide = currentSlide * margStep;
            $('.sweetcolor-items').css({'left': equals +marginSlide +'px' });
             $('.sweetcolor-item').removeClass('sweetcolor-item-active');
             $('.sweetcolor-item-img-circle').fadeOut(100);
        }
        else {
            margStep = 320;
            marginSlide = currentSlide * margStep;
            equals = '-';
            $('.sweetcolor-items').css({'left': equals +marginSlide +'px' });
            $('.sweetcolor-item').addClass('sweetcolor-item-active');
            $('.sweetcolor-item-active').find('.sweetcolor-item-img-circle').fadeIn(300);           
        }
        if ($(window).width() >= 1030) {
            var scArrowNext = 3;
        }
        else if ($(window).width() >= 770) {
            var scArrowNext = 2;
        }
        else if ($(window).width() <= 770) {
            var scArrowNext = 1;
        }
        if (currentSlide < 1) {
            $('.swetcolor-prev').removeClass('swetcolor-prev').addClass('swetcolor-prev-inactive');
        }
        else {
                $('.swetcolor-prev-inactive').removeClass('swetcolor-prev-inactive').addClass('swetcolor-prev');
        }
    });
    if (currentSlide < 1) {
            $('.swetcolor-prev').removeClass('swetcolor-prev').addClass('swetcolor-prev-inactive');
    }
    else {
            $('.swetcolor-prev-inactive').removeClass('swetcolor-prev-inactive').addClass('swetcolor-prev');
    }
}

function teglineSizeAll () {
        var mpWidthSizeNum2 = $('.cloud').width();
        var mpHeightSizeNum2 = mpWidthSizeNum2 / 1.45;
        var mpHeightSize2 = parseInt(mpHeightSizeNum2, 10);
        $('.cloud').css({'height': mpHeightSize2});
        
        var mpWidthSizeNumFontAll = $('.cloud').css('width');
        var fontSizetegNumAll = parseInt(mpWidthSizeNumFontAll) / 7.897;
        var fontSizetegAll = parseInt(fontSizetegNumAll, 10);
        $('.tegline').css({'font-size': fontSizetegAll  +'pt'});
        if ($(window).width() < 400) {
            $('.tegline').css({'font-size': '30pt'});
        }
}

$(document).ready(function ()
{
            $("a[rel]").each(function(){
                var a = $(this).attr("rel");
                $("a[rel="+a+"]").fancybox();
            });



    var ssv = 0;    
	$('body').on('click', '.work-item a', function () {
        $('body').addClass('fix');
        var pp =  $(this).parent().data('images');
        var images_aray = pp.split(',');
        ssv = images_aray.length;

        $('body').prepend('<div class="feedback-form-row" style="display: block;"><div class="feedback-form-img"><div class="arrow_feed clll"><span></span></div><div class="arrow_feed ar_fee_right"><span></span></div><div class="arrow_feed ar_fee_left"><span></span></div></div></div>');
        for(var i = 0; i < ssv; i++) {
            if (i == 0) {
                $('.feedback-form-img').append('<img class="active" src="'+images_aray[i]+'">');
            }
            else {
                $('.feedback-form-img').append('<img src="'+images_aray[i]+'">');
            }
        }
        return false;        
    });
    var pager = 1;
    $('body').on('click','.arrow_feed.clll',function () {
        $('body > .feedback-form-row:first-child').remove();
        $('body').removeClass('fix');
        pager = 1;
        //console.log(ssv + " " + pager);
    });
    $('body').on('click','.arrow_feed.ar_fee_right',function () {
        if (pager < ssv ) {
           pager++;
           //console.log(ssv + " " + pager);
           $('.feedback-form-img .active').removeClass('active').next().addClass('active');
       }
       else {
            $('.feedback-form-img .active').removeClass('active');
            $('.feedback-form-img img:nth-child(4)').addClass('active');
            pager = 1;
            //console.log(ssv + " " + pager);
       }
    });
    $('body').on('click','.arrow_feed.ar_fee_left',function () {
        if (pager > 1 ) {
            pager--;
            $('.feedback-form-img .active').removeClass('active').prev().addClass('active');
            //console.log(ssv + " " + pager);
        }
        else {
            $('.feedback-form-img .active').removeClass('active');
            $('.feedback-form-img img:last-child').addClass('active');
            pager = ssv;
            //console.log(ssv + " " + pager);
       }
    });
    var para = 0;
    var inc = 700;
	function cloudParax () {
		var heightScreen = $('body').height();
		for(i = 0; i < 15; i++) {
			para = para + inc;
			$('.cloud_wrp').append('<div style="top: '+para+'px" class="cloud-4"><img class="cloud-img" backgroud-size="100%" src="/images/dachastroy/cloud_left.png"/></div><div style="top: '+para+'px" class="cloud-5"><img class="cloud-img" backgroud-size="100%" src="/images/dachastroy/cloud_back.png"/></div><div style="top: '+para+'px" class="cloud-6"><img class="cloud-img" backgroud-size="100%" src="/images/dachastroy/cloud_center.png"/></div>');
		}
	}
	cloudParax ();	
    teglineSizeAll ();
    $(window).resize(teglineSizeAll);
    app.init();
    if ("ontouchstart" in document.documentElement)
    {
        $('*').unbind('hover');
        $('*').unbind('mouseenter');
        $('*').unbind('mouseover');
        $('*').unbind('mouseout');
        $('*').unbind('mouseleave');
    }
    $('#pull').click(function () {
        $('#header-menu:after').css({'border-top':'none','border-bottom':'15px solid #FFFFFF'});
    });
	if (screen.width >= 1100) {
        $(window).bind('scroll',function(e){
            parallaxScroll();
        });
    }
    function parallaxScroll(){
        var scroll = $(window).scrollTop() / 1.4;
        $('.cloud-1').css({'transform': 'translateY(-'+scroll * 0.7+'%)'});
        $('.cloud-2').css({'transform': 'translateY(-'+scroll * 0.3+'%)'});
        $('.cloud-3').css({'transform': 'translateY(-'+scroll * 0.5+'%)'});
        $('.cloud-4').css({'transform': 'translateY(-'+scroll * 0.9+'%)'});
        $('.cloud-5').css({'transform': 'translateY(-'+scroll * 1.7+'%)'});
        $('.cloud-6').css({'transform': 'translateY(-'+scroll * 0.3+'%)'});
    }
});