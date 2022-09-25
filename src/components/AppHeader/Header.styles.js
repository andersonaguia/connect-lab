import styled from "styled-components"

export const HeaderStyled = styled.header`
    width: 100%;
    height: 60px;
    padding: 6px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;    
    background-color: ${({theme}) => theme.colors.brand.green};

    @media screen and (max-width: 1700px){
        width: 100%;
    }

    @media screen and (max-width: 1024px){
        width: 100%;
    }
        
    @media screen and (max-width: 540px){
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 280px;
    }
`

export const TitleStyled = styled.h1`
    color: ${({ theme }) => theme.colors.text.p};
`