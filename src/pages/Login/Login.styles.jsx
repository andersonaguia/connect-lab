import styled from "styled-components";

export const SectionStyled = styled.section`
    width: 381px;
    height: 300px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background-color: ${({theme}) => theme.colors.brand.white};   

    & button{
        height: 40px;
    }

    @media screen and (max-width: 1700px){
        width: 40%;
    }

    @media screen and (max-width: 1500px){
        width: 30%;
    }

    @media screen and (max-width: 1024px){
        width: 50%;
    }

    @media screen and (max-width: 820px){
        width: 60%;
    }
        
    @media screen and (max-width: 540px){
        width: 70%;
    }

    @media screen and (max-width: 420px){
        width: 90%;
        padding: 15px 5px 15px 5px;
    }
`
export const DivStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;  

    & input{
        width: 100%
    }
`

export const DivName = styled.div`     
    display: flex;
    flex-direction: row;
    gap: 5px;
`

export const FormStyled = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`