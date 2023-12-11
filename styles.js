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
    /* --secondary-darker: color-mix(in srgb,var(--secondary),#000 25%); */
    --secondary-darker: rgba(255, 220, 186, 1);
    
    --secondary-variant: #332f2b;

    --dark: #753228;
    --dark-secondary: #655d51;
  }

  body {
    margin: 0;
    font-family: 'Open Sans';
    background-color: var(--secondary);
  }

  main {
    margin-bottom: 4.5rem;
    margin-top: 4.5rem;
  }
 
`;
