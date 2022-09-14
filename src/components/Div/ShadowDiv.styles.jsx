import styled from "styled-components"

export const ShadowDivStyled = styled.div`
    width: ${({ width })=> width}; 
    height: ${({ height })=> height};
    margin-top: 10px;
    padding: 0 48px;
    display: ${({ display })=> display};
    flex-direction: ${({ direction })=> direction};
    justify-content: ${({ justify })=> justify};
    align-items: center;
    gap: 28px;
    background-color: ${({ color }) => color};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`