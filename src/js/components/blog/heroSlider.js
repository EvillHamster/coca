import Swiper from 'swiper';
import 'swiper/css';

export const useBlogSliders = () => {
  // ! Setting slider
  const heroSlider = new Swiper('.hero__slider', {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    initialSlide: 0,
    centeredSlides: false,
    breakpoints: {
      1200: {
        spaceBetween: 32,
      },
      996: {
        slidesPerView: 1.5,
        centeredSlides: false,
      },
      768: {
        slidesPerView: 2,
        centeredSlides: false,
      },
    },

    on: {
      init: function () {
        this.clickUserOnSlider = document.querySelector('.hero__slider-btns');
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

  // ! CONST FOR SLIDERS
  const NAV_LIST = 'hero-categories__nav-list';
  const NAV_LINK = 'hero-categories__nav-link';
  const ACTIVE_CLASS = 'hero-categories__nav-link--active';
  const ALL_SLIDERS = 'hero__article';

  // ! Toggle active nav category for sliders
  const navList = document.querySelector(`.${NAV_LIST}`);
  navList.addEventListener('click', (event) => {
    const clickedLink = event.target.closest(`.${NAV_LINK}`);
    if (!clickedLink) return;
    event.preventDefault();

    const navLink = document.querySelectorAll(`.${NAV_LINK}`);
    navLink.forEach((link) => {
      link.classList.remove(ACTIVE_CLASS);
    });
    clickedLink.classList.add(ACTIVE_CLASS);

    // ! Filter categories for sliders
    const selectCategory = clickedLink.dataset.categories;
    const allSliders = document.querySelectorAll(`.${ALL_SLIDERS}`);
    allSliders.forEach((slide) => {
      const slideCategory = slide.dataset.categories;
      if (selectCategory === 'all' || selectCategory === slideCategory) {
        slide.style.display = '';
      } else {
        slide.style.display = 'none';
      }
    });
    heroSlider.update();
  });
};
