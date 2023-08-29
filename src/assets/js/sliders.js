let sliderHome = new Swiper('.sliderHome-swiper', {
    autoplay: true,
    loop: true,
    spaceBetween: 40,
    speed: 800,
    navigation: {
        nextEl: '.sliderHome-navigation .sliderHome-navigation_next',
        prevEl: '.sliderHome-navigation .sliderHome-navigation_prev',
    },
})

let slider_singleProduct = new Swiper('.singleProduct-swiper', {
    autoplay: true,
    loop: true,
    spaceBetween: 40,
    speed: 800,
})