// JavaScript Document

// Doc Load Functions
$(document).load(function() {

    // you could also declare a loader here that fades out when all other assets are ready.

    var wintop = $(window).scrollTop();
    var docheight = $(document).height();
    var docbottom = docheight - 50;
    var sectionTop = wintop + 30;



    // ensure placemarker always on correct chapter on page refresh
    var divFirst = $('#section-1').position().top;
    var divSecond = $('#section-2').position().top;
    var divThird = $('#section-3').position().top;
    var divFourth = $('#section-4').position().top;
    var divFifth = $('#section-5').position().top;
    var divSixth = $('#section-6').position().top;
    var divSeventh = $('#section-7').position().top;


    if(divFirst < sectionTop && divSecond > sectionTop) {
        $('header ul li').removeClass('currentCh');
        $('header ul li.one').addClass('currentCh');
    }
    else if(divSecond < sectionTop && divThird > sectionTop){
        $('header ul li').removeClass('currentCh');
        $('header ul li.two').addClass('currentCh');
    }
    else if(divThird < sectionTop && docBottom > sectionTop){
        $('header ul li').removeClass('currentCh');
        $('header ul li.three').addClass('currentCh');
    }
    else if(divFourth < sectionTop && divFifth > sectionTop){
        $('header ul li').removeClass('currentCh');
        $('header ul li.four').addClass('currentCh');
    }
    else if(divFifth < sectionTop && divSixth > sectionTop){
        $('header ul li').removeClass('currentCh');
        $('header ul li.five').addClass('currentCh');
    }
    else if(divSixth < sectionTop && divSeventh > sectionTop){
        $('header ul li').removeClass('currentCh');
        $('header ul li.six').addClass('currentCh');
    }
    else if(divSeventh < sectionTop && divEight > sectionTop){
        $('header ul li').removeClass('currentCh');
        $('header ul li.seven').addClass('currentCh');
    }
    else if(divSeventh < sectionTop && divEight > sectionTop){
        $('header ul li').removeClass('currentCh');
        $('header ul li.height').addClass('currentCh');
    }
    else if(divSeventh < sectionTop && divEight > sectionTop){
        $('header ul li').removeClass('currentCh');
        $('header ul li.nine').addClass('currentCh');
    }


}); // END DOC LOAD FUNCTIONS

$(document).ready(function() {
    // PARALLAXPARALLAXPARALLAX HAPPENS HERE.
    // Init Skrollr

    if( $(window).width() > 970) {
        var s = skrollr.init();

        // Refresh Skrollr after resizing our sections
        s.refresh($('.car-elevator'));
    }


    // universal variables
    var winHeight = $(window).height();
    var winWidth = $(window).width();
    $('.intro').height(winHeight);

    var captionHeight = $('.captionbox').height();

    $('.captionbox').css({
        'top':0 - captionHeight,
        'margin-bottom': captionHeight * -1	
    });

    if($(window).width() < 800){
        $('.intros').height(winHeight * 0.4);
    }

    if($(window).width() < 550){
        $('.intros').height(winHeight * 0.7);
    }

    if($(window).width() < 800){
        $('.intro').height(winHeight * 0.7);
    }

     if($(window).width() < 550){
        $('.intro').height(winHeight * 0.3);
    }

    if($(window).width() < 550){
        $('li#mag-menu > a').html('<i class="fa fa-bars"></i>');
    }


    $(window).resize(function() {
        if($(window).width() < 500){
            $('.intro').height(winHeight * 0.3);
        }
        else if($(window).width() > 800){
            $('.intro').height(winHeight);
        }

        if($(window).width() < 550){
            $('li#mag-menu > a').html('<i class="fa fa-bars"></i>');
        }
        else if($(window).width() > 550){
            $('li#mag-menu > a').html(' ');
        }

    });



    $('.arrowdown a').click(function() {
        var categoryTop = $('#section-1').position().top; 


        $('#section-1').goTo();


        $('#section-1').addClass('liveCategory');

    });

    // Chapter Markers Move On Scroll
    $(window).scroll(function() {
        var wintop = $(window).scrollTop();
        var docheight = $(document).height();
        var docbottom = docheight - 50;
        var sectionTop = wintop + 30;
        var divFirst = $('#section-1').position().top;
        var divSecond = $('#section-2').position().top;
        var divThird = $('#section-3').position().top;
        var divFourth = $('#section-4').position().top;
        var divFifth = $('#section-5').position().top;
        var divSixth = $('#section-6').position().top;
        




        if(divFirst < sectionTop && divSecond > sectionTop) {
            $('header ul li').removeClass('currentCh');
            $('header ul li.one').addClass('currentCh');
        }
        else if(divSecond < sectionTop && divThird > sectionTop){
            $('header ul li').removeClass('currentCh');
            $('header ul li.two').addClass('currentCh');
        }
        else if(divThird < sectionTop && divFourth > sectionTop){
            $('header ul li').removeClass('currentCh');
            $('header ul li.three').addClass('currentCh');
        }
        else if(divFourth < sectionTop && divFifth > sectionTop){
            $('header ul li').removeClass('currentCh');
            $('header ul li.four').addClass('currentCh');
        }
        else if(divFifth < sectionTop && divSixth > sectionTop){
            $('header ul li').removeClass('currentCh');
            $('header ul li.five').addClass('currentCh');
        }
        else if(divSixth < sectionTop && divSeventh > sectionTop){
            $('header ul li').removeClass('currentCh');
            $('header ul li.six').addClass('currentCh');
        }
        else if(divSeventh < sectionTop && divEighth > sectionTop){
            $('header ul li').removeClass('currentCh');
            $('header ul li.seven').addClass('currentCh');
        }
        else if(divEighth < sectionTop && divNinth > sectionTop){
            $('header ul li').removeClass('currentCh');
            $('header ul li.height').addClass('currentCh');
        }
        else if(divNinth < sectionTop){
            $('header ul li').removeClass('currentCh');
            $('header ul li.nine').addClass('currentCh');
        }

    });
                            
    $('.sub_menu li.nine').click(function() {
        $('header ul li').removeClass('currentCh');
        $(this).addClass('currentCh');	
        $('#section-9').goTo();
    });
                        
    $('.sub_menu li.height').click(function() {
        $('header ul li').removeClass('currentCh');
        $(this).addClass('currentCh');	
        $('#section-8').goTo();
    });
              
    $('.sub_menu li.seven').click(function() {
        $('header ul li').removeClass('currentCh');
        $(this).addClass('currentCh');	
        $('#section-7').goTo();
    });
    
    $('.sub_menu li.six').click(function() {
        $('header ul li').removeClass('currentCh');
        $(this).addClass('currentCh');	
        $('#section-6').goTo();
    });
    
    $('.sub_menu li.five').click(function() {
        $('header ul li').removeClass('currentCh');
        $(this).addClass('currentCh');	
        $('#section-5').goTo();
    });
    
    $('.sub_menu li.four').click(function() {
        $('header ul li').removeClass('currentCh');
        $(this).addClass('currentCh');	
        $('#section-4').goTo();
    });
    
    $('.sub_menu li.three').click(function() {
        $('header ul li').removeClass('currentCh');
        $(this).addClass('currentCh');	
        $('#section-3').goTo();
    });

    $('.sub_menu li.two').click(function() {
        $('header ul li').removeClass('currentCh');
        $(this).addClass('currentCh');			
        $('#section-2').goTo();
    });

    $('.sub_menu li.one').click(function() {
        $('header ul li').removeClass('currentCh');
        $(this).addClass('currentCh');			
        $('#section-1').goTo();
    });

    // end doc ready functions
});

$.fn.goTo = function() {
    $('html, body').animate({
        scrollTop: $(this).offset().top + 'px'
    }, 'slow');
    return this; 
}



