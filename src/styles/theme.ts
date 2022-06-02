import { DefaultTheme } from 'styled-components';

const deviceSizes = {
  mobile: '375px',
  tablet: '768px',
  laptop: '1024px',
};

export const theme: DefaultTheme = {
  colors: {
    white: '#fff',
    black: '#000',
    gray1: '#646464',
    gray2: '#77777A',
    gray3: '#F4F2F3',
    darkGreen: '#37823C',
    orange: ' #FF792D',
  },
  breakpoints: {
    mobile: `@media screen and (max-width: ${deviceSizes.mobile})`,
    tablet: `@media screen and (max-width: ${deviceSizes.tablet})`,
    laptop: `@media screen and (max-width: ${deviceSizes.laptop})`,
  },
};
