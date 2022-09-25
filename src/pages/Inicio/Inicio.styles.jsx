import styled from "styled-components";

export const DivStyled = styled.div`
    width: 100%;
    padding: 0 20px 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1024px){
        & .products{
            & ul{
                grid-template-columns: repeat(2, 1fr);
                & li{
                    width: 100%; 
                    flex-direction: column; 
                    justify-content: center;
                    align-items: center;
                    height: 100%;             
                }
                & .btn{  
                    width: 50%;                  
                    flex-direction: row;
                    justify-content: space-evenly;
                }
                & .text{                    
                    justify-content: center;
                    align-items: center;                   
                }
            }           
        }

        & .weather{
            width: 100%;
            img{
                width: 100px;
                height: 100px;
            }           
        }
    }
    
    @media screen and (max-width: 420px){
        & .products{
            & ul{
                grid-template-columns: auto;
                & li{
                    width: 100%; 
                    flex-direction: column; 
                    justify-content: center;
                    align-items: center;
                    height: 100%;             
                }
                & .btn{  
                    width: 50%;                  
                    flex-direction: row;
                    justify-content: space-evenly;
                }
                & .text{                    
                    justify-content: center;
                    align-items: center;                   
                }
            }           
        }

        & .buttons{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            justify-items: center;
        }

        & .weather{
            width: 100%;
            img{
                width: 35px;
                height: 35px;
            }
            p{
                font-size: 0.8rem;
            }
        }
    }
`
export const SectionStyled = styled.section`
    width: 100%;
    height: 150px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background-color: ${({theme}) => theme.colors.brand.info};
    color: ${({theme}) => theme.colors.text.primary};

    & ul{
        list-style-type: none;
    }    
`

export const SectionStyledGrid = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
export const UlStyled = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    gap: 20px;
`

export const UlButtonStyled = styled.ul` 
    width: 80%;
    padding: 20px;  
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 15px;
`