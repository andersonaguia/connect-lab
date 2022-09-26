import styled from "styled-components";

export const ImgStyled = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
`
export const SectionStyled = styled.section`
    width: 381px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background-color: #ffffff;

    & ul{
        list-style-type: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
export const DivStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`