$(document).ready(function(){
    $('.portfolio-slides').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.portfolio-slides-nav'
    });
    $('.portfolio-slides-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.portfolio-slides',
        centerMode: true,
        focusOnSelect: true
    });
});
