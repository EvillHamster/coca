import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

export const useOurTeamSlider = () => {
  new Swiper('.our-team__swiper', {
    slidesPerView: 'auto',
    initialSlide: 2,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 2.5,
      },
      1200: {
        slidesPerView: 3,
      },
    },

    on: {
      init: function () {
        this.clickUserOnSlider = document.querySelector(
          '.our-team__swiper__slider-btns',
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
