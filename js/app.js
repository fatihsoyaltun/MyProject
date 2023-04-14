//flickity slider
let $carousel = $('.main-carousel').flickity({
    //options
    cellAlign: 'left',
    contain: true,
    // draggable: true,
    // freeScroll: true,
    // autoPlay: 1500,
    // pauseAutoPlayOnHover: true,
    // wrapAround: true
});

AOS.init();

//loader
const preloader = document.querySelector('#load');
if (preloader) {
    window.addEventListener('load', () => {
        preloader.remove();
    });
}

const navbar = document.querySelector('.nav-menu');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});



let menuBtn = document.querySelector('.header-menu-toggle');
let menuHero = document.querySelector('.header-nav');
let menuContent = document.querySelector('.header-nav__content');

menuBtn.addEventListener('click', () => {
    menuHero.classList.add('menu-is-open');
    menuContent.classList.add('menu-is-open');
});

let menuCloseBtn = document.querySelector('.header-nav__close');
menuCloseBtn.addEventListener('click', () => {
    menuHero.classList.remove('menu-is-open');
    menuContent.classList.remove('menu-is-open');
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    doots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})


const clip = document.querySelectorAll('.clip');
for (let i = 0; i < clip.length; i++) {
    clip[i].addEventListener('mouseenter', function (e) {
        clip[i].play();
        clip[i].style.opacity = 1;
    });
    clip[i].addEventListener('mouseout', function (e) {
        clip[i].pause();
        clip[i].style.opacity = 0;
    });
    clip[i].addEventListener('click', function (e) {
        clip[i].play();
        clip[i].style.opacity = 1;
    });
};