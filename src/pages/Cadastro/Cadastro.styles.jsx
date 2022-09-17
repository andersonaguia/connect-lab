import styled from "styled-components";

export const SectionStyled = styled.section`
    width: 820px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background-color: #ffffff;
`
export const DivStyled = styled.div`
    display: flex;
    flex-direction: ${({ direction })=> direction};
    gap: ${({ gap })=> gap};    
`

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`