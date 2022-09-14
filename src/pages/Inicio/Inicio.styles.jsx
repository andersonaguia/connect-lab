import styled from "styled-components";

export const ImgStyled = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`
export const SectionStyled = styled.section`
    width: 1200px;
    height: 215px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background-color: #ffffff;
`
export const DivStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const SectionStyledGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    margin-top: 110px;
    gap: 20px;
    width: 100%;
`