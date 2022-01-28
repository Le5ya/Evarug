const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  loop: true,
  speed: 400,
  spaceBetween: 50,
  centeredSlides: true,
  slideToClickedSlide: true,
  toggle: true,
  breakpoints: {
      1100: {
      slidesPerView: 2
    },
   
    768: {
      slidesPerView: 1
    }
  }

});