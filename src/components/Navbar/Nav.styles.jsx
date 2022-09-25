import styled from "styled-components";

export const NavStyles = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const UlStyles = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    list-style-type: none;

    @media screen and (max-width: 1700px){
        
    }

    @media screen and (max-width: 1500px){
       
    }

    @media screen and (max-width: 1024px){
       
    }

    @media screen and (max-width: 820px){
        
    }
        
    @media screen and (max-width: 540px){
        flex-direction: column;
        justify-content: center;
        align-items: center;       
    }
`