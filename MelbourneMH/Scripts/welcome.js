﻿$(document).on('click', nextSlide);

function nextSlide() {
    console.log($('.active + .slide').length);
    if ($('.active + .slide').length > 0) {
        $('.active + .slide').addClass('active');
        $($('.active')[0]).removeClass('active');
    } else {
        $('.active').removeClass('active');
        $('.slide:nth-child(1)').addClass('active');
    }
}