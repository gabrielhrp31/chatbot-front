import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
    width:calc(100% - 50px);

    display:flex;
    justify-content:center;
    align-items:center;

    background-color: #075e54;
    color:white;

    margin:20px auto;
    padding:20px 0;

    border:1px solid white;
    border-radius:5px;

    :hover{
        cursor:pointer;
        opacity:0.9;
    }

    :disabled{
        opacity:0.6;
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

    > svg {
        margin-left:10px;
    }
`;

export const Loader = styled.div`
    margin-left:10px;
    font-size: 10px;
    text-indent: -9999em;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: linear-gradient(to right, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
    position: relative;
    animation: load3 1.4s infinite linear;
    transform: translateZ(0);

    :after{
        background: #075e54;
        width: 75%;
        height: 75%;
        border-radius: 50%;
        content: '';
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    @-webkit-keyframes load3 {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @keyframes load3 {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

`
