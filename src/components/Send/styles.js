import styled, { css } from 'styled-components';

export const StyledButton = styled.div`
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
        opacity:0.8;
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
