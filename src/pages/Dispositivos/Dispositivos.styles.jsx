import styled from "styled-components"

export const CardStyled = styled.div`
    width: 387px;
    height: 224px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background-color: #ffffff;
`

export const DivStyled = styled.div`   
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 20px;
    margin-top: 40px;
`
export const ImgStyled = styled.img`
    width: 80px;
    height: 80px;
`

export const FormStyled = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
`

export const InputStyled = styled.input`
    width: 300px;
    padding: 10px;
    border-radius: 10px;
    border: none;
`
