$(document).ready(function () {
    let menu_section_right = $('#menu_section_right');

    $('.menu_item').click(() => {
        menu_section_right.addClass('fade_in');
        setTimeout(() => {
            menu_section_right.removeClass('fade_in');
        }, 3000);
    }
    )
});