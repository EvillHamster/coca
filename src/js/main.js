import '../assets/scss/main.scss';

// ! components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { UseInsightSlider, UseTestimonialsSlider } from './components/home/slider.js';

// ! activated functions
useTheme();
useBurger();
UseInsightSlider();
UseTestimonialsSlider();
