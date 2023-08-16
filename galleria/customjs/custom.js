AOS.init();

$('#nav-icon-desktop').click(function(){
    $(this).toggleClass('open');
    $('.gr-overlay-menu').toggleClass('d-block');
});

$('#nav-icon-mobile2').click(function(){
    $('.navbar-collapse').removeClass('show');
});

$('.gr-banner-slider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [

        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }

    ]
});
// $('.gr-store-brand-slider').slick({
//     dots: false,
//     infinite: true,
//     arrows: false,
//     speed: 2000,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: false,
//     autoplaySpeed: 5000,
//     pauseOnHover: false,
//     pauseOnFocus: false,
//     variableWidth: true,
//     responsive: [

//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//                 variableWidth: false,
//             }
//         }

//     ]
// });
$('.gr-happening-slider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [

        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
            }
        }

    ]
});
// $('.gr-image-content-slider').slick({
//     dots: false,
//     infinite: true,
//     arrows: false,
//     speed: 2000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     pauseOnHover: false,
//     pauseOnFocus: false,
//     responsive: [

//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//             }
//         }

//     ]
// });
$('.gr-fun-slider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
    variableWidth: true,
    responsive: [

        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                variableWidth: false,
            }
        }

    ]
});

$('.gr-advertice-slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
    variableWidth: true,
    prevArrow: '<span class="slick-prev"><span class="material-symbols-outlined">arrow_back</span></span>',
    nextArrow: '<span class="slick-next"><span class="material-symbols-outlined">arrow_forward</span></span>',
    responsive: [

        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false,
            }
        }

    ]
});

// Footer More and Less Button

$('.gr-footer-more-click').click(function () {
    $('.gr-footer-ul-list-2').removeClass('d-none');
    $('.gr-footer-ul-list-2').addClass('d-block');
    $('.gr-footer-more-click').removeClass('d-block');
    $('.gr-footer-more-click').addClass('d-none');
    $('.gr-footer-less-click').removeClass('d-none');
    $('.gr-footer-less-click').addClass('d-block');
});

$('.gr-footer-less-click').click(function () {
    $('.gr-footer-ul-list-2').removeClass('d-block');
    $('.gr-footer-ul-list-2').addClass('d-none');
    $('.gr-footer-more-click').removeClass('d-none');
    $('.gr-footer-more-click').addClass('d-block');
    $('.gr-footer-less-click').removeClass('d-block');
    $('.gr-footer-less-click').addClass('d-none');
});



// Footer More and Less Button



$slickGreen = false;
function greenSlider() {
    if ($(window).width() < 767) {
        if (!$slickGreen) {
            $(".gr-store-brand-slider").slick({
                dots: false,
                infinite: true,
                arrows: false,
                speed: 2000,
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 5000,
                pauseOnHover: false,
                pauseOnFocus: false,
                
            });
            $slickGreen = true;
        }
    } else if ($(window).width() > 768) {
        if ($slickGreen) {
            $('.gr-store-brand-slider').slick('unslick');
            $slickGreen = false;
        }
    }
};

$(document).ready(function () {
    greenSlider();
});
$(window).on('resize', function () {
    greenSlider();
});



$slickImageContent = false;
function slickImageContentSlider() {
    if ($(window).width() < 767) {
        if (!$slickImageContent) {
            $(".gr-image-content-slider").slick({
                dots: false,
                infinite: true,
                arrows: false,
                speed: 2000,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 5000,
                pauseOnHover: false,
                pauseOnFocus: false,
                
            });
            $slickImageContent = true;
        }
    } else if ($(window).width() > 768) {
        if ($slickImageContent) {
            $('.gr-image-content-slider').slick('unslick');
            $slickImageContent = false;
        }
    }
};

$(document).ready(function () {
    slickImageContentSlider();
});
$(window).on('resize', function () {
    slickImageContentSlider();
});



$grCusineImages = false;
function grCusineSlider() {
    if ($(window).width() < 767) {
        if (!$grCusineImages) {
            $(".gr-cusine-slider").slick({
                dots: true,
                infinite: true,
                arrows: false,
                speed: 2000,
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 5000,
                pauseOnHover: false,
                pauseOnFocus: false,
                
            });
            $slickImageContent = true;
        }
    } else if ($(window).width() > 768) {
        if ($grCusineImages) {
            $('.gr-cusine-slider').slick('unslick');
            $grCusineImages = false;
        }
    }
};

$(document).ready(function () {
    grCusineSlider();
});
$(window).on('resize', function () {
    grCusineSlider();
});




    $('#sticky').click(function (){
        function sticky_relocate() {
            var window_top = $(window).scrollTop();
            if ($(window).width() > 992) {
                var div_top = $('#content-anchor').offset().top - 220;
            }else{
                var div_top = $('#content-anchor').offset().top - 110;
            }
           
            if (window_top > div_top) {
                
            $('#sticky').addClass('stick');
                
            // Get the height of #sticky
            // outerHeight() gets height including padding and borders
            var phantomHeight = $('#sticky').outerHeight();
                
            // Set the height of $sticky-phantom
            $('#sticky-phantom').height(phantomHeight).show();
                
            } else {
            $('#sticky').removeClass('stick');
            $('#sticky-phantom').hide();
            }
        }
        
        $(function () {
        $(window).scroll(sticky_relocate);
        sticky_relocate();
        });


        function sticky_relocate_heading() {
            var window_top = $(window).scrollTop();
            var div_top = $('#content-anchor-heading').offset().top;
            if (window_top > div_top) {
                
            $('#sticky-heading').addClass('stick-heading');
                
            // Get the height of #sticky
            // outerHeight() gets height including padding and borders
            var phantomHeight = $('#sticky-heading').outerHeight();
                
            // Set the height of $sticky-phantom
            $('#sticky-phantom-heading').height(phantomHeight).show();
                
            } else {
            $('#sticky-heading').removeClass('stick-heading');
            $('#sticky-phantom-heading').hide();
            }
        }
        
        $(function () {
        $(window).scroll(sticky_relocate_heading);
        sticky_relocate_heading();
        });
    });