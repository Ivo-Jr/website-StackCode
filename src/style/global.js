import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  /* @media (max-width: 1080px) {
    html {
        font-size: 93.75%; // 15px.
    }
  }

  @media (max-width: 720px) {
    html {
        font-size: 87.5%; // 14px.
    }
  } */

  body {
    background: #F0F2F5;
    -webkit-font-smooth: antialiased;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;