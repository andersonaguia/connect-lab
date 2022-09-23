import styled from "styled-components";

export const LiStyled = styled.li`
    width: 400px;
    height: 120px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    gap: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background-color: #ffffff;
` 
export const DivStyled = styled.div`
    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`
export const ImgStyled = styled.img`
    width: 80px;
    height: 80px;
`
export const ImgStatusStyled = styled.img`
    width: 35px;
    height: 35px;
`
export const H2Styled = styled.h2`
    font-size: 1rem;
`
export const DivModalStyled = styled.div`
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const UlStyled = styled.ul`
    list-style-type: none;
`
export const ButtonStyled = styled.button`
    width: 35px;
    height: 35px;
    border: none;
    background-image: url(${({image}) => image});
    background-size: cover;
    background-color: transparent;
    cursor: pointer;
    

    &:hover {
        opacity: 0.7;
    }
`

export const DivButtonStyled = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`