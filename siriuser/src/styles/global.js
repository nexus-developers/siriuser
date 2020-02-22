import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@font-face {
    font-family: Avenir ;
    src: url('./AvenirLTStd-Roman.otf');
}
    * {
     margin: 0;
     padding: 0;
     outline: 0;
     box-sizing: border-box;
     font-family: Avenir, sans-serif;
    }

    html, body, #root{
        min-height: 100%;
    }

    button{
     cursor: pointer;
    }
`