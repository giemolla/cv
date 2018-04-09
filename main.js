$(document).ready(function(){

    var toggleMenu = function() {
        $('.bar1').toggleClass('change-bar1');
        $('.bar2').toggleClass('change-bar2');
        $('.bar3').toggleClass('change-bar3');
        $('.side-bar').toggleClass('side-bar-expand', function() {
            $('.side-bar-menu').toggleClass('side-bar-menu-expand');
            $('.sbm-li').fadeToggle(800);
        });
        if ( $(document).width() >= 1024 ) {
            $('.main-content').toggleClass('scooched');
        } else {
            $('.main-content').toggleClass('just-opa')
        }
    };

    var hideMenu = function() {
        $('.bar1').removeClass('change-bar1');
        $('.bar2').removeClass('change-bar2');
        $('.bar3').removeClass('change-bar3');
        $('.side-bar').removeClass('side-bar-expand', function() {
            $('.side-bar-menu').removeClass('side-bar-menu-expand');
            $('.sbm-li').fadeOut(800);
        });
        if ( $(document).width() >= 1024 ) {
            $('.main-content').removeClass('scooched');
        } else {
            $('.main-content').removeClass('just-opa')
        }
    };

    var hideLetter = function() {
        $('.letter').fadeOut(800);
        $('.main-content').removeClass('none-content');
    };
  
    $('#open-nav').on('click', toggleMenu);

    $('.main-content').click(function (e) {
        if (e.target != $('.side-bar-expand')) {
            hideMenu();
        }
    });

    $('.side-bar a').on('click', function() {
        hideMenu();
        hideLetter();
        if( $(this).hasClass('file') ) {
            $('.main-content').toggleClass('none-content');
            $('.letter').fadeToggle(800);
            $('.fa-times').on('click', hideLetter);
        }
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1000);
        return false;
    });

    $('.fa-file').on('click', function() {
        $('.letter').toggleClass('show');
    });

    $('.icon-wrapper').hover(function() {
        $(this).toggleClass('icon-wrapper-extend');
    });

});