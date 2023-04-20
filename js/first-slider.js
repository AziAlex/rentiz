
const swip = {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
}

let width = window.innerWidth
const slidesCount = width <= 500 ? 1 : width > 500 && width <= 900 ? 2 : 3
var swiper = new Swiper(".mySwiper", {
    ...swip,
    slidesPerView: slidesCount,
    slidesPerGroup: slidesCount
});

window.addEventListener("resize", event => {
    width = window.innerWidth
    switch (true) {
        case width < 500:
            swiper = new Swiper(".mySwiper", {
                ...swip,
                slidesPerView: 1,
                slidesPerGroup: 1,
            });
            break;
        case width >= 500 && width < 900:
            swiper = new Swiper(".mySwiper", {
                ...swip,
                slidesPerView: 2,
                slidesPerGroup: 2,
            });
            break;
        case width >= 900:
            swiper = new Swiper(".mySwiper", {
                ...swip,
                slidesPerView: 3,
                slidesPerGroup: 3,
            });
            break;
    }
})


