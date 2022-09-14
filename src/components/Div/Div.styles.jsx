import styled from "styled-components"

export const DivStyled = styled.div`    
    display: ${({ display })=> display};
    flex-direction: ${({ direction })=> direction};
    justify-content: ${({ justify })=> justify};
    gap: ${({ gap })=> gap};
    align-items: ${({ align })=> align};
`