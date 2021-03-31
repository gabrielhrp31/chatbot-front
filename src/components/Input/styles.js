import { Field } from 'formik';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const StyledInput = styled(Field)`
    height:50px;
    width:200px;
    padding:5px;

    outline:none;
    border:1px solid rgb(0,0,0,0.6);
    border-radius:5px;

    color:rgb(0,0,0,0.6);

    :focus{
        border:1px solid rgb(0,0,0,0.8);
        color:rgb(0,0,0,0.8);
    }

    ${({invalid})=>invalid &&
        css`
            border:1px solid rgb(255,0,0,0.6);;
            color:rgb(255,0,0,0.6);

            :focus{
                border:1px solid rgb(255,0,0,0.8);
                color:rgb(255,0,0,0.8);
            }
        `
    }
`;


export const Button = styled.button`
    height:50px;
    width:50px;

    display:flex;
    justify-content:center;
    align-items:center;

    font-size:25px;
    margin-left:5px;
    border-radius:50%;

    cursor: pointer;

    :hover{
        background-color:rgba(0,0,0,0.1)
    }
    
    ${({invalid})=>invalid &&
        css`
            color:rgb(255,0,0,0.6);
            cursor: unset;
            
            :hover{
                background-color:transparent;
            }
        `
    }
`
