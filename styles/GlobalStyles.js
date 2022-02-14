import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.text};
}

body {
  background: ${(props) => props.theme.colors.background};
}


`;
