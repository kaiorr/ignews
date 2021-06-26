import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: ${({ theme }) => theme.palette.grey[900]};
    color: ${({ theme }) => theme.palette.grey[200]};
  }

  body, input, textarea, select, button {
    font: 400 1rem "Popins", sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
