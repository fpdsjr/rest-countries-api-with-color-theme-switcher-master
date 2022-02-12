import { createGlobalStyle, GlobalStyleComponent } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;

  /* background: ${(props) => props.theme.colors.background}; */
  color: ${(props) => props.theme.colors.text};
}

  
:root {
  --darkBlue: hsl(209, 23%, 22%)
  --verDarkBlue:hsl(207,26%,17%)
  --veryDarkBlue:hsl(200,15%,8%)
  --darkGray:hsl(0,0%,52%)
  --veryLightGray:hsl(0,0%,98%)
  --white:hsl(0,0%,100%)
  }

`;
