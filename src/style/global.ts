import { createGlobalStyle } from "styled-components";
// import { media } from "./media";
// import { pxToRem } from "@/lib";

export const GlobalStyles = createGlobalStyle`

  :root {
   

  }
  * {
    box-sizing: border-box;
    outline: none;
     /* font-family: 'Inter', sans-serif !important; */
  }

  html, body, body div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, img, ul, li, ol, a {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-weight: normal;
    vertical-align: baseline;
    background: transparent;
    scroll-behavior: smooth;
  }

  body {
    background-color: black;
  }
  `;
