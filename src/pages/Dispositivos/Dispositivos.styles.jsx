import styled from "styled-components"

export const FormStyled = styled.form`
    width: 100%;
    padding: 10px 40px 10px 40px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;

    & button{
        height: 30px;
    }
`

export const InputStyled = styled.input`
    width: 100%;
    height: 30px;
    padding: 10px;
    border-radius: 10px;
    border: none;
`

export const UlStyled = styled.ul`
    width: 100%;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    gap: 20px;
`
export const DivStyled = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;

`