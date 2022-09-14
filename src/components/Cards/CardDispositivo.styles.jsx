import styled from "styled-components"

export const ShadowDivStyled = styled.div`
    width: 387px;
    height: 120px;
    margin-top: 10px;
    padding: 0 48px;
    display: flex;
    flex-direction: row;
    justify-content: ${({ justify })=> justify};
    align-items: center;
    gap: 28px;
    background-color: ${({ color }) => color};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background-color: #ffffff;
`