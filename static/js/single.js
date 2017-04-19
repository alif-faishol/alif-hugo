$(document).ready(function() {
    if ($('h1').is(':in-viewport')) {
        $('#post-detail > div > p').fadeOut();
        $('#post-detail').slideUp('fast');
    } else {
        $('#post-detail > div > p').fadeIn().css('visibility', 'visible');
        $('#post-detail').slideDown('fast').css('visibility', 'visible');
    }
    $(window).scroll(function() {
        if ($(window).scrollTop() < 300 && $('.banner-container').css('display') == 'block') {
            $('.banner').css('top', 23 - $(window).scrollTop() / 6 + 'px');
        } else {
            $('.banner').css('top', 23 - 300 / 6 + 'px');
        }
        if ($('h1').is(':in-viewport')) {
            $('#post-detail > div > p').fadeOut();
            $('#post-detail').slideUp('fast');
        } else {
            $('#post-detail > div > p').fadeIn().css('visibility', 'visible');
            $('#post-detail').slideDown('fast').css('visibility', 'visible');
        }
    });
    if ($(window).width() < 440) {
        $('.banner-container').css('display', 'none');
    } else {
        $('.banner-container').css('display', 'block');
    }
    /*
    $('.banner').sticky({
        topSpacing: 73
    });
    */
    $('.kiri').css('max-width', $('.container').width() - 200);
    $('.banner').css('width', $('.container').width());
    $(window).resize(function() {
        $('.kiri').css('max-width', $(window).width() - 200);
        $('.banner').css('width', $('.container').width());
        if ($(window).width() < 440) {
            $('.banner-container').css('display', 'none');
        } else {
            $('.banner-container').css('display', 'block');
        }
    });
});
