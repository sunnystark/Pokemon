import { createGlobalStyle } from 'styled-components';

export const MainStyle = createGlobalStyle`
  *{
    outline: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body{
    -webkit-font-smoothing: antialiased !important;
    transition: background-color 300ms;
    background-color: #ffcc01;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height:100%;
  }

  body, input, button {
    font-size: 14px;
    font-family: 'Roboto', Helvetica, sans-serif;
  }
  svg {
    cursor: pointer
  }

  ul {
    list-style:none;
  }

  li {
    list-style-type: none;
    font-family: 'Roboto', Helvetica, Arial;
    font-size: 30px;
  }

  button {
    cursor: pointer;
    border: 0;

  }

  a {
    text-decoration:none;
  }

  @keyframes loadAnimation {
    0% {
      opacity: 0;
    }

    100% {
      opacity:1
    }
  }
`;
