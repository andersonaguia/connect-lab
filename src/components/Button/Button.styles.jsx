import styled from "styled-components";

export const ButtonStyled = styled.button`
    width: 91px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    border-radius: 40px;
    background-color: ${({ background })=> background};
    color: #FFFFFF;
    border: none;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }
    
`