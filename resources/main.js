$(document).ready(function () {
    let menu_section_right = $('#menu_section_right');

    $('.menu_item').click(() => {
        menu_section_right.addClass('fade_in');
        setTimeout(() => {
            menu_section_right.removeClass('fade_in');
        }, 3000);
    }
    )


    let mobile_nav_bar_close = $('#mobile_nav_bar_close');
    let mobile_nav_bar = $('.mobile_nav_bar');
    let nav_hamburger = $('.nav_hamburger');
    mobile_nav_bar_close.click(() => {
        $('.mobile_nav_bar').addClass('hide');
    });

    nav_hamburger.click(() => {
        mobile_nav_bar.removeClass('hide');
    })


});