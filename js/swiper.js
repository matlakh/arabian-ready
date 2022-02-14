var swiper = new Swiper(".companies__swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 150,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
    },
    pagination: {
        el: ".companies__pagination",
        clickable: true
    },
    // breakpoints:{
    //     320:{

    //     }
    // }
});
var swiper = new Swiper(".companies__swiper--mobile", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 25,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
    },
    pagination: {
        el: ".companies__pagination--mobile",
        clickable: true
    },
});
var swiper = new Swiper(".crypto__swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 150,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
    },
    pagination: {
        el: ".crypto__pagination",
        clickable: true
    }
});
var swiper = new Swiper(".crypto__swiper--mobile", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 25,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
    },
    pagination: {
        el: ".crypto__pagination--mobile",
        clickable: true
    },
});
var swiper = new Swiper(".comments__swiper", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".comments__pagination",
        clickable: true,
    },
    breakpoints: {
        320:{
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        768:{
            slidesPerView: 2,
            slidesPerGroup: 2,
        }
    },
})