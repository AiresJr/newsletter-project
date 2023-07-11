import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
:root{
    --color-primary: #ff6257;
    --color-slate-grey: #242742;
    --color-charcoal-grey: #36384e;
    --color-grey: #9294a0;
    --color-white: #ffffff;
}

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
}

button, a{
    cursor: pointer;
    background: transparent;
    border: 0;
   }

body{
   
    background-color: var(--color-slate-grey);
 
}
`;
