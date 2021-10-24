import { createGlobalStyle } from 'styled-components'

//Variables globales
export const globals = {
    primaryFont: "Dosis, sans-serif",
    primaryColor: '#04adbf',
    secondaryColor: '#0df205',
    tertiaryColor: '#82f263',
    contrastColor: '#f2e205',
    auxDarkColor: '#0d0d0d',
    auxLightColor: '#fff',
    spacing: '1rem'
}

//Media queries
export const mobile = `@media (min-width: 480px)`;
export const tablet = `@media (min-width: 768px)`;

//Estilos globales
export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
        box-sizing: border-box;
    }
    *,
    *::after,
    *::before {
        box-sizing: inherit;
    }
    body {
        font-size: 1.6rem;
        font-family: ${globals.primaryFont};
    }

    h1, h2 {
        text-align: center;
    }
`