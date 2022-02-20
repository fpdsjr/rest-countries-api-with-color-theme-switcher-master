import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 700px) {
    body { overflow-x: hidden; }
  }
}


body {
  background: ${(props) => props.theme.colors.background};
}


`;
