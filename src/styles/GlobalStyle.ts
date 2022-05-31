import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body{
    overflow-x: hidden;
    height: 100vh;
    width:100%;
  }

  html, #root{
    width: 100%;
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;
    font-family: "Noto Sans KR", sans-serif;
    margin: 0;
    padding: 0;
  }
    
  a {
    text-decoration: unset;
    color: inherit;
  }
  
  button {
    border: none;
    padding: 0;
    background: none;
    cursor: pointer;
  }

  ul, li {
    list-style: none;
    margin:0;
    margin-block-start: 0;
    margin-block-end:0;
    padding-inline-start:0;
    padding: 0;
  }
`;
export default GlobalStyle;
