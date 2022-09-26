import styled from "styled-components"

export const LiStyled = styled.li`
    width: 250px;
    margin-top: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background-color: ${({theme}) => theme.colors.brand.white};

    & h3{
        font-size: 0.6rem;
    }
`

export const ImgProdutoStyled = styled.img`
    width: 50px;
    height: 50px;
`

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
`

export const SelectStyled = styled.select`
    width: 200px;
    height: 30px;
`

export const InputStyled = styled.input`
    width: 200px;
    height: 30px;
`