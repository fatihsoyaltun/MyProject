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
const logo = document.querySelector('.neos-logo');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        navbar.classList.add('scrolled');
        logo.src="/img/neos.PNG";
    } else {
        navbar.classList.remove('scrolled');
        logo.src="/img/neosLogo2.png"
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

$('.owlTwo').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    dots:false,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false,
        }
    }
})

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
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
    clip[i].addEventListener('mouseenter', function (e) {
        clip[i].play();
        clip[i].style.opacity = 1;
    });
};

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.previous');
let animClss = document.querySelectorAll('.caro-text');
let animClss2 = document.querySelectorAll('.caro-text2');

nextBtn.addEventListener('click', () => {
    animClss2.forEach((el) => {
        el.classList.add('animate__backInDown');
    });
    animClss.forEach((el) => {
        el.classList.remove('animate__flipInX');
    });
});

prevBtn.addEventListener('click', () => {
    animClss.forEach((el) => {
        el.classList.add('animate__flipInX');
    });
    animClss2.forEach((el) => {
        el.classList.remove('animate__backInDown');
    });
});