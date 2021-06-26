import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
