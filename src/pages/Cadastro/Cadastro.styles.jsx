import styled from "styled-components";

export const DivContainerStyled = styled.div`
    width: 90%;
    display: flex;
    padding: 15px;
    margin-bottom: 20px;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background-color: ${({theme}) => theme.colors.brand.white};


    & button{
        margin-top: 15px;
        height: 40px;
    }

        @media screen and (max-width: 1700px){
            width: 70%;
        }

        @media screen and (max-width: 1500px){
            width: 70%;
        }

        @media screen and (max-width: 1024px){
            width: 80%;
        }

        @media screen and (max-width: 820px){
            width: 90%;
        }
        
        @media screen and (max-width: 500px){
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

export const FormStyled = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center; 
    gap: 20px; 

    & .inputs{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        align-items: center;
        gap: 25px;

        @media screen and (max-width: 1700px){
            grid-template-columns: auto;
        }

        @media screen and (max-width: 1500px){
            grid-template-columns: repeat(2, 1fr);
        }

        @media screen and (max-width: 1024px){
            grid-template-columns: repeat(2, 1fr);
        }

        @media screen and (max-width: 550px){
            grid-template-columns: auto;
        }
    }
`




