import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      gray1: string;
      gray2: string;
      gray3: string;
      darkGreen: string;
      orange: string;
    };

    breakpoints: {
      mobile: string;
      tablet: string;
      laptop: string;
    };
  }
}
