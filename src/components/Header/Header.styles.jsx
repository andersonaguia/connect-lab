import styled from "styled-components"

export const HeaderStyled = styled.header`
    width: 100%;
    height: 60px;
    padding: 6px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;    
    background-color: ${({theme}) => theme.colors.brand.alerta};
`

export const TitleStyled = styled.h1`
    color: ${({ theme }) => theme.colors.text.p};
`