import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root{
    --primary: #a32e2d;
    
    --secondary: #fdead8;
    --secondary-darker: color-mix(in srgb,var(--secondary),#000 15%);
    
    --secondary-variant: #332f2b;

    --dark: #753228;
    --dark-secondary: #655d51;
  }

  body {
    margin: 0;
    font-family: open-sans;
    background-color: var(--secondary);
  }

  main {
    margin-bottom: 4.5rem;
    margin-top: 4.5rem;
  }
 
`;
