import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.gray2};
    -webkit-font-smoothing: antialiased;
    font: 400 1rem/1.6 'Roboto', sans-serif;
    color:${(props) => props.theme.gray6};
  }

  input {
    outline: ${(props) => props.theme['green-light']};
  }

  button {
    outline: ${(props) => props.theme['green-dark']};
  }
`
