/**
 * Created by boss on 25 июня.
 */

$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#scrollUp').fadeIn();
        } else {
            $('#scrollUp').fadeOut();
        }
    });

    $('#scrollUp').click(function() {
        $('body,html').animate({scrollTop:0},1000);
    });
});