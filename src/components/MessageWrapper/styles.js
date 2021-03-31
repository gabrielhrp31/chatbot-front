import styled, { css } from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    gap:15px;

    width:fit-content;
    max-width:calc(100%-20px);
    padding:15px 20px;
    margin:20px;

    border-radius:10px;
    border:1px solid rgba(0,0,0,0.3);
    
    font-size:14px;

    @media (min-width:400px){
        max-width:calc(400px);
    }


    ${({show})=>show ? 
        css`
            transition: opacity 0.8s;
            opacity: 1;
        `
        :
        css`
            width:0;
            height:0;
            opacity: 0;
            position:absolute;
            pointer-events:none;
        `

    }

    ${({sended})=>sended ? 
        css`
            margin-left:auto;
            background-color: var(--sended-message);
        `
        :
        css`
            background-color: var(--incoming-message);
        `

    }

    box-shadow: 5px 5px 15px -4px rgba(0,0,0,0.42);
`;


export const ChatBotIcon = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;



    font-size:25px;
    width:50px;
    height:50px;
    padding:10px;

    border-radius:100%;

    background-color:rgba(0,0,0,0.6);
    color:white;
`