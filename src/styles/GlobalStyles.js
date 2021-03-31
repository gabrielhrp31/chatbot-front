import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`


    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
    
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }

    html, body, #root{
        max-height:100vh;
        max-width:100vw;
        width:100%;
        height:100%auto;
        display:flex;
        justify-content:center;
    }

    *, button, input{
        border:0;
        background:none;
        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    html{
        background:var(--background);
    }

    :root{
        --background:#f0f0f0;
        --background-messages:#E5DDD5;
        --incoming-message:#fff;
        --sended-message:#DCF8C6;
    }
`