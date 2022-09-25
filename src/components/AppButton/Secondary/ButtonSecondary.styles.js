import styled from "styled-components";

export const ButtonStyled = styled.button`
    width: 74px;
    height: 27px;
    border: 1px solid ${({theme}) => theme.colors.brand.green};
    background-color: ${({theme}) => theme.colors.brand.green};
    color: ${({ theme }) => theme.colors.text.primary};
    
    cursor: pointer;

    &:hover{
        opacity:0.7;
        
    }
`