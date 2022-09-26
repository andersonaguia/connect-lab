import styled from "styled-components";

export const ButtonStyled = styled.button`
    min-width: 130px;
    padding: 0 10px 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    border-radius: 40px;
    background-color: ${({theme}) => theme.colors.brand.green};
    color: ${({ theme }) => theme.colors.text.primary};
    border: none;
    cursor: pointer;

    &:hover{
        opacity: 0.7;
    }    
`