/*window.onload = () => {
    let load = document.getElementById('loader')
    setTimeout(() =>{ load.style.display = 'none'}, 4000)

}*/
/*var loading;

function load(){

    loading = setTimeout(showPage, 2000)
}

function showPage(){
    document.getElementById("loader").style.display="none";
}
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter>4){
        counter = 1;
    }
}, 5000);*/

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