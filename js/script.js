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
   
    400: {
      slidesPerView: 1
    }
  }
 

});

 const modalWindow = document.querySelector('.modal');
 const btnDisplay = document.querySelectorAll('.main-display__button')[0];
 const btnModal = document.querySelectorAll('.modal__button')[0];
//  btnModal.style.opacity = 0;

document.addEventListener('click', () => {
  return;
  modalWindow.classList.add('active');
});
document.addEventListener('dblclick', () => {
  return;
  modalWindow.classList.remove('active');
});

btnDisplay.addEventListener('click', () => {
  // console.log('CLICK')
  modalWindow.classList.add('active');
});

btnModal.addEventListener('click', () => {
  modalWindow.classList.remove('active');
});

modalWindow.addEventListener('click', (e) => {
  const isModal = e.target.closest('.modal__inner');
  if(!isModal) {
    modalWindow.classList.remove('active'); 
  }
  

});