$(document).ready(function() {
    $('.hamburger').click(function(event) {
        $('.hamburger').toggleClass('hamburger--active');
        $('.menu__list').toggleClass('menu__list--active');
    });
    $('.menu__item').click(function(event) {
        $('.hamburger').toggleClass('hamburger--active');
        $('.menu__list').toggleClass('menu__list--active');
    });
});