const sr = ScrollReveal({
    origin:"top",
    distance:"60px",
    duration: 2500,
    delay: 400,
    reset: true,
})
sr.reveal(` .container_card, .content-contact `),
sr.reveal(`.categories`,{origin:"bottom"}),
sr.reveal(`.name`,{origin:"left"})

let homeSwiper = new Swiper(".home-swiper",{
    spaceBerween: 30,
    loop: 'true',
    pagination:{
        el: '.swiper-pagination',
        clickable: true
    },
})

$(document).ready(function(){
    var altura = $('.menu').offset().top;
    $(window).on('scroll', function(){
        if($(window).scrollTop() > altura){
            $('.menu').addClass('menu-fixed');
        } else {
            $('.menu').removeClass('menu-fixed');
        }
    });
});
