import styled from "styled-components"

export const DivStyled = styled.div`
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
        & h1{
            font-size: 1.5rem;
        }        
    }
        
    @media screen and (max-width: 540px){
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 350px;
        gap: 10px;

        & header{
            flex-direction: column;
            gap: 0;           
        }
    }

    & Button{
        border: 1px solid ${({theme}) => theme.colors.brand.grey}
    }
`

export const HeaderStyled = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
`

export const TitleStyled = styled.h1`
    color: ${({ theme }) => theme.colors.text.p};
`
export const ImgStyled = styled.img`
    width: 40px;
    height: 40px;
`