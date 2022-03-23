import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
    }
    html, body, #__next {
        width : 100% !important;
        height: 100%;
        padding: 0 !important;
    }
    

`
export default GlobalStyle
