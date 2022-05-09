import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }


  @media (max-width: 320px) {
    html {
      font-size: 60.5%;
    }
  }

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