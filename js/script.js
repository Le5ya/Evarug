const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  loop: true,
  speed: 400,
  spaceBetween: 50,
  centeredSlides: true,
  slideToClickedSlide: true,
  toggle: true,
  breakpoints: {
      1300: {
      slidesPerView: 3
    },
    800: {
      slidesPerView: 2
    },
    320: {
      slidesPerView: 1
    }
  }

});