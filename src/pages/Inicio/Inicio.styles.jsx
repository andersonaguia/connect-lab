import styled from "styled-components";

export const SectionStyled = styled.section`
    width: 80%;
    height: 215px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background-color: #ffffff;

    & ul{
        list-style-type: none;
    }
  
`
export const DivStyled = styled.div`
    width: 100%;
    padding: 0 20px 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const SectionStyledGrid = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
`
export const UlStyled = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    gap: 20px;
`