import { createGlobalStyle } from "styled-components";

import bgSrc from "./images/bg.png";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  body {
    padding: 16px;
    margin: 0;

    font-family: 'Monster High', sans-serif;
    font-size: 16px;

    background-image: url(${bgSrc});
  }
`;
