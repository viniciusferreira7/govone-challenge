import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

body,  button {
  font-family: "Open Sans";
  font-size: 1rem;
  font-weight: 400;
}
`