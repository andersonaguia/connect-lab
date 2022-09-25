import styled from "styled-components";

export const LiStyled = styled.li`
    width: 320px;
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

// const handleConfirmarForm = (valores) => {
//     submitUser(valores)
//         .then((response) => {
//             console.log(response)
//         })
//         .catch((error) => {
//             console.log(error)
//         })
// }
export const DivStyled = styled.div`
    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;

    & p{
        font-size: 0.8rem;
    }
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
    font-size: 0.8rem;
`
export const DivModalStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin: 15px 0 15px 0;
`
export const UlStyled = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    margin-bottom: 15px;
    border: 1px solid ${({theme}) => theme.colors.brand.info};
    border-radius: 5px;
    padding: 10px;
`
export const ButtonStyled = styled.button`
    width: 20px;
    height: 20px;
    border: none;
    background-image: url(${({image}) => image});
    background-size: cover;
    background-color: ${({theme}) => theme.colors.brand.transparent};
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

    & .info{
        width: 25px;
        height:25px;
    }
`