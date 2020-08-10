(function ($) {

    // loading

    $(window).load(function () {
        $("#loading").delay(2000).fadeOut(500);
        $("#loading-center").click(function () {
            $("#loading").fadeOut(500);
        })
    })

    // menu

    jQuery('#mobile-menu').meanmenu({

        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"

    });

    // stiky-nav

    function scrollToTop() {
        if ($insight.scroll_top_enable != 1) {
            return;
        }
        var $scrollUp = $('#page-scroll-up');
        var lastScrollTop = 0;
        var autoHide;

        $window.scroll(function () {
            clearTimeout(autoHide);

            var st = $(this).scrollTop();
            if (st > lastScrollTop) {
                $scrollUp.removeClass('show');
            } else {
                if ($window.scrollTop() > 200) {
                    $scrollUp.addClass('show');

                    autoHide = setTimeout(function () {
                        $scrollUp.removeClass('show');
                    }, 6000);
                } else {
                    $scrollUp.removeClass('show');
                }
            }
            lastScrollTop = st;
        });

        $scrollUp.on('click', function (evt) {
            $('html, body').animate({ scrollTop: 0 }, 600);
            evt.preventDefault();
        });
    }

    // skill-area

    new WOW().init();




    // counterUp

    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });




    // testimonial-active 

    $('.testimonial-active').owlCarousel({
        
       loop: true,
        margin: 10,
        dots: true,
        autoplay: true,
        autoplayTimeout:5000,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    // brand-active

    $('.brand-active').owlCarousel({

        loop: true,
        margin: 10,
        dots: true,
        autoplay: false,
        autoplayTimeout: 5000,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    // scrollUp

    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: 'Scroll to top', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });



    // onePageNav

    $(document).ready(function () {
        $('#nav').onePageNav();
    });







})(jQuery);