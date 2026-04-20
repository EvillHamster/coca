import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

let swiperInstance = null;

export const useArticlesSlider = () => {
  swiperInstance = new Swiper('.articles__slider', {
    modules: [Navigation],
    slidesPerView: 3,
    spaceBetween: 32,
    loop: false,
    navigation: {
      prevEl: '.articles__btns-prev',
      nextEl: '.articles__btns-next',
    },
    breakpoints: {
      0: {
        spaceBetween: 20,
        slidesPerView: 1,
      },
      577: {
        slidesPerView: 1,
      },
      769: {
        slidesPerView: 2,
      },
      1201: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
  });

  updateNavButtons(swiperInstance);
  swiperInstance.on('slideChange', () => updateNavButtons(swiperInstance));

  return swiperInstance;
};

export function updateNavButtons(swiper) {
  if (!swiper) return;

  if (swiper.isBeginning) {
    swiper.navigation.prevEl.classList.add('is-disabled');
  } else {
    swiper.navigation.prevEl.classList.remove('is-disabled');
  }

  if (swiper.isEnd) {
    swiper.navigation.nextEl.classList.add('is-disabled');
  } else {
    swiper.navigation.nextEl.classList.remove('is-disabled');
  }
}
