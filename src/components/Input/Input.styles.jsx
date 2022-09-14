import styled from "styled-components"

export const InputStyled = styled.input`
    width: ${({ width })=> width};
    height: ${({ height })=> height};
    padding: 0 10px;
    border: 1px solid ${({ color })=> color};
    border-radius: 3px;
`