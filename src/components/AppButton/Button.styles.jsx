import styled from "styled-components";

export const ButtonStyled = styled.button`
    min-width: 130px;
    padding: 0 10px 0 10px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    border-radius: 40px;
    background-color: green;
    color: #FFFFFF;
    border: none;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }    
`