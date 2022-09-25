import styled from "styled-components";

export const FooterStyled = styled.footer`
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: ${({theme}) => theme.colors.brand.green};
    color: ${({ theme }) => theme.colors.text.primary};
`