import {createGlobalStyle} from "styled-components"

// global styles can also be used in styled components

export const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
    }

    body{
        background:${({theme})=> theme.colors.body};
        color: hsl(192, 100%, 9%);
        font-size: 1.15em;
    }

    img{
        max-width:100%;
    }

    p{
        line-height:1.5;
        opacity:0.8;
    }
`