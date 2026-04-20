import '/scss/blog.scss';
// ! components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useBlogSliders } from './components/blog/heroSlider.js';
import { useArticlesSlider } from './components/blog/articles-slider.js';

// ! activated functions
useTheme();
useBurger();
useBlogSliders();
useArticlesSlider();
