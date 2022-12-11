import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

::-webkit-scrollbar{
  width: 15px;
}
::-webkit-scrollbar-thumb{
  background-color: ${(props) => props.theme['blue-300']};
  border-radius: 5px;
}
::-webkit-scrollbar-track{
  background-color: ${(props) => props.theme['blue-200']};
  border-radius: 5px;
}

body,  button {
  font-family: "Open Sans";
  font-size: 1rem;
  font-weight: 400;
}
`
