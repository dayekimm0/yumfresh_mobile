import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}

:root {
  --light: #fff;
  --dark: #000;
  --accent: #063;
  --sub: #523113;
  --border: #ccc;
}

* {
  box-sizing: border-box;
}

ul, li {
  list-style: none;
}

a {
  text-decoration: none;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'GmarketSans', sans-serif;
}
`;

export default GlobalStyles;
