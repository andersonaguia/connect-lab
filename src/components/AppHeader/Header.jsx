import { Nav } from "../Navbar/Nav"
import { HeaderStyled, TitleStyled} from "./Header.styles"
import { Button } from "../AppButton/Button";
import { useAuthentication } from "../../contexts/Authentication/useAuthentication";

export const Header = () => {
    const { isAuthenticated, handleLogout } = useAuthentication();

    const handleClickAutenticacao = () => {
        handleLogout()     
    };

    return(
        <HeaderStyled>
            <TitleStyled>connect lab</TitleStyled>
            {            
                isAuthenticated ? <Nav/> : <Button onClick={handleClickAutenticacao}>Login</Button>              
            }           
        </HeaderStyled>
    )
}