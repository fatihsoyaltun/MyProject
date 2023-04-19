
//back to top
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#06a3da ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

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

//transparent navbar
const navbar = document.querySelector('.nav-menu');
const logo = document.querySelector('.neos-logo');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        navbar.classList.add('scrolled');
        logo.src = "/img/neos.PNG";
    } else {
        navbar.classList.remove('scrolled');
        logo.src = "/img/neosLogo2.png"
    }
});

//responsive menu
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

document.addEventListener('click', (event) => {
    if (!menuHero.contains(event.target) && !menuBtn.contains(event.target)) {
        menuHero.classList.remove('menu-is-open');
        menuContent.classList.remove('menu-is-open');
    }
});



$('.owlTwo').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: false,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 4,
            nav: true,
            loop: false,
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

//hover video
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

// carousel animation
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





// const div = document.createElement('div');
// let index = 0;

// const updateCity = () => {
//   fetch(`https://api.openweathermap.org/data/2.5/group?id=745044,323786,311046,750269&appid=65df515c830ddb1cd59ccbe33d79985e&units=metric&lang=tr`)
//     .then(response => response.json())
//     .then(data => {
//       const cityData = data.list[index];
//       const city = cityData.name;
//       const temp = cityData.main.temp;
//       const description = cityData.weather[0].description;
//       const content = `${city}: ${temp}°C, ${description}`;
//       div.innerHTML = content;
//       index = (index + 1) % data.list.length;
//     });
// }

// updateCity();
// setInterval(updateCity, 5000);

// document.body.appendChild(div);





//   const url = 'https://api.openweathermap.org/data/2.5/';
// const key = '65df515c830ddb1cd59ccbe33d79985e';


const div = document.createElement('div');
const weather_content = document.querySelector(".weather-content");

let index = 0;

const updateCity = () => {
    fetch(`https://api.openweathermap.org/data/2.5/group?id=745044,323786,311046,750269&appid=65df515c830ddb1cd59ccbe33d79985e&units=metric&lang=tr`)
        .then(response => response.json())
        .then(data => {
            const cityData = data.list[index];
            const city = cityData.name;
            const temp = cityData.main.temp;
            const description = cityData.weather[0].description;
            const content = `${city}: ${temp}°C, ${description}`;
            div.innerHTML = content;
            index = (index + 1) % data.list.length;
            weather_content.appendChild(div);
        });
}

updateCity();
setInterval(updateCity, 5000);