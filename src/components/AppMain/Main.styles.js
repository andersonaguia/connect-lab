import styled from 'styled-components'

export const MainStyles = styled.main`
    width: 100%;
    min-height: 80vh;
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: ${({theme}) => theme.colors.brand.grey};
`