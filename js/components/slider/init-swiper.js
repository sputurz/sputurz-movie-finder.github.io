export default function initSwiper() {

    const swiper = new Swiper('.swiper', {
        navigation: {
            nextEl: '.day-products__navigation-btn--next',
            prevEl: '.day-products__navigation-btn--prev',
        },
        slidesPerView: 4,
        spaceBetween: 40,
    });

}