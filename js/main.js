$(document).ready(function () {
    /*Action for mobile-menu. Roll-up and roll-down with class adding*/
    $(".menu__button-toogler").click(function (e) {
        e.preventDefault();
        $(".js-menu-action").toggleClass("roll-out-menu-mobile");
        $(".main-container").toggleClass("disable-scroll-when-menu-show");
    })
    /*===============================================================*/

    
    /*Track when screen changing and initialize slider===============*/
    function windowSize() {
        if ($(window).width() <= '767') {
            $(".review__card-container").toggleClass("js-make-slider");
            $(".js-make-slider").slick({
                dots: true
            });
            $(".js-make-this-block-slider-on-mobile").toggleClass("js-make-slider-here");
            $(".js-make-slider-here").slick({
        dots: true
    });
        };
    };
    $(window).on('load resize', windowSize);
    /*===============================================================*/

    
    /*Initialization of slider=======================================*/
    $(".js-make-slider-here").slick({
        dots: true
    });
    
    $(".js-slider").slick({
        dots: true
    });
    /*===============================================================*/
    
    /*Drop Down Magic Here===========================================*/
    $(".js-click-for-expand-inform").click(function (event) {
        let if_click_p_tag = event.target.parentElement.nextElementSibling;
        if_click_p_tag.classList.toggle("_open-close-element");
        let if_click_div_tag = event.target.nextElementSibling;
        if_click_div_tag.classList.toggle("_open-close-element");
    });
    /*===============================================================*/
    
    /*Drop For Mobile Footer=========================================*/
    $(".js-click-for-expand-footer").click(function (event) {
        let a = event.target.parentElement;
        a.classList.toggle("_open-close-footer");
    });
    /*===============================================================*/
    
});     