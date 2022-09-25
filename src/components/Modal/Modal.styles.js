import styled from "styled-components";

export const OverlayStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .7);
    z-index: 1000;
`

export const ModalStyled = styled.div`
    min-width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({theme}) => theme.colors.brand.white};
    border-radius: 5px;
    padding: 50px;
    z-index: 1000;
    color: ${({ theme }) => theme.colors.text.secondary};

    & p{
        font-size: 0.6rem;
    }

    & h2{
        font-size: 0.8rem;
        padding-bottom: 10px;

    }

    & h4{ 
        font-size: 0.6rem;
    }

    & h3{
        font-size: 0.7rem;        
    }    

    & input, select{
        border-radius: 5px;
        border: 1px solid;
        padding: 5px;
        font-size: 0.8rem;
    }
`
export const ModalButtonStyled = styled.button`
    background-color: transparent;    
    border: none;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text.secondary};
    &:hover{
        opacity: 0.7;
    }
`

export const DivStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`