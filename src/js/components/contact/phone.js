import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

const injectStyles = () => {
  if (document.getElementById('iti-fix')) return;
  const style = document.createElement('style');
  style.id = 'iti-fix';
  style.textContent = `
    .iti__country-list {
      background-color: #fff !important;
    }
    
    .iti__country,
    .iti__country-name,
    .iti__dial-code {
      color: #000 !important;
    }
    
    .iti__search-input {
      background-color: #fff !important;
      color: #000 !important;
    }
  `;
  document.head.appendChild(style);
};

export const usePhone = () => {
  const input = document.querySelector('#phone');

  injectStyles();

  intlTelInput(input, {
    initialCountry: 'auto',
    geoIpLookup: (callback) => {
      fetch('https://ipapi.co/json')
        .then((res) => res.json())
        .then((data) => callback(data.country_code))
        .catch(() => callback('us'));
    },
    utilsScript:
      'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
  });
};
