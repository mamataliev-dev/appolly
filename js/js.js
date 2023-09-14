var swiper = new Swiper(".featuresSwiper", {
    direction: 'vertical',
    slidesPerView: 3,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".interfaceSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

var swiper = new Swiper(".teamSwiper", {
    slidesPerView: 1,
    autoplay: {
        delay: 1700,
        disableOnInteraction: false,
    },
    spaceBetween: 30,
    loop: true,
});

// Menu Burger
const blackout = document.querySelector('.blackout')
const btn = document.querySelector('.menu-btn')
const mobileLink = document.querySelectorAll('.mobile-nav-link')
const menuBtn = document.querySelector('.mobile-nav-btn')
const mobileNav = document.querySelector('.mobile-nav')
const body = document.body

btn.addEventListener('click', () => {
    blackout.classList.add('active')
    mobileNav.classList.add('active')
    body.classList.add('active')
})

menuBtn.addEventListener('click', () => {
    blackout.classList.remove('active')
    mobileNav.classList.remove('active')
    body.classList.remove('active')
})

mobileLink.forEach(element => {
    element.addEventListener('click', () => {
        blackout.classList.remove('active')
        body.classList.remove('active')
        mobileNav.classList.remove('active')
    })
});

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('blackout')) {
        blackout.classList.remove('active')
        document.body.classList.remove('active')
        mobileNav.classList.remove('active')
    } else {
        console.log();
    }
})