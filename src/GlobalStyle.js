import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
    *,*::before,*::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        text-decoration: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Outfit', sans-serif;
    }

    body {
        background-color: #10141E;
        color: #FFF;
    }

    h1 {
        font-weight: 300;
        font-size: 32px;
    }

    h2 {
        font-weight: 300;
        font-size: 24px;
    }

    h3 {
        font-weight: 500;
        font-size: 24px;
    }

    h4 {
        font-weight: 500;
        font-size: 18px;
    }

    p {
        font-weight: 300;
        font-size: 15px;
    }

    span {
        font-weight: 300;
        font-size: 13px;
        mixed-blend-mode: normal;
    }
`;

export default globalStyle;
