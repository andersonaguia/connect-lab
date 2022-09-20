import styled from "styled-components"

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

export const UlStyled = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
`
