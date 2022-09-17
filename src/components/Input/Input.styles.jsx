import styled from "styled-components"

export const InputStyled = styled.input`
    width: 300px;
    height: 34px;
    padding: 0 10px;
    border: 1px solid ${({ theme }) => theme.colors.brand.green};
    border-radius: 3px;
`