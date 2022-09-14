import { Nav } from "../Navbar/Nav"
import { HeaderStyled, TitleStyled} from "./Header.styles"
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
// import { useState, useEffect} from "react";

export const Header = () => {
    // const [ isLogged, setIsLogged] = useState(false)
    
    // useEffect(() => {  
    //      setIsLogged(false) 
    //    return () => {
    //      <h1>carregando</h1>
    //    }
    // }, [isLogged])
    const isLogged = true

    return(
        <HeaderStyled>
            <TitleStyled>connect lab</TitleStyled>
            {
                isLogged ? <Nav/> : <Link to="/login"><Button name="Login"/></Link>
            }            
        </HeaderStyled>
    )
}