import Swiper from 'swiper';
import 'swiper/css';

export const UseInsightSlider = () => {
  new Swiper('.insight__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    initialSlide: 1,
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },

    on: {
      init: function () {
        this.clickUserOnSlider = document.querySelector(
          '.insight__slider-btns',
        );
        this.clickUserOnSlider?.classList.remove('is-hidden');
      },
      touchStart: function () {
        this.clickUserOnSlider?.classList.add('is-hidden');
      },
      touchEnd: function () {
        setTimeout(() => {
          this.clickUserOnSlider?.classList.remove('is-hidden');
        }, 400);
      },
      slideChangeTransitionEnd: function () {
        this.clickUserOnSlider?.classList.remove('is-hidden');
      },
    },
  });
};
