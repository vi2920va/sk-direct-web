import { DefaultTheme } from 'styled-components';

import { generateMedia } from 'styled-media-query';

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
  breakpoints: {},
};

export const customMedia = generateMedia({
  tablet: '760px',
  mobile: '375px',
});
