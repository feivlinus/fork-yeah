import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root{
    --primary: #a32e2d;
    --light: #fdead8;
    --light-secondary: #332f2b;
    --dark: #753228;
    --dark-secondary: #655d51;
  }

  body {
    margin: 0;
    font-family: system-ui;
    background-color: var(--light);
  }

  main {
    margin-bottom: 4.5rem;
  }
 
`;
