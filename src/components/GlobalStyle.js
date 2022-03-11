import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        max-width: 1400px;
        margin: 0 auto;
        overflow-x: hidden ;
        font-family: 'Lato', sans-serif;
        //position: relative;
    }
    html, body {
        //scroll-behavior: smooth; 
    }

    main {
        min-height: 70vh;
    }


    h1, h2, h3, h4, h5, h6 {
        font-family: 'Lora', serif;
        font-weight: 500;
    }

    a {
        color: black;
    }

    p {
        margin-bottom: 1rem;
        line-height: 1.5;
    }

    @media (max-width: 1398.98px) {
        body {
           padding: 0 2rem;
        }
    }
`;

export default GlobalStyle;
