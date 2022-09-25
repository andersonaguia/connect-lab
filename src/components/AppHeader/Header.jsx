import { Nav } from "../Navbar/Nav"
import { HeaderStyled, TitleStyled} from "./Header.styles"
import { Button } from "../AppButton/Button";
import { useAuthentication } from "../../contexts/Authentication/useAuthentication";
import { useCustomTheme } from "../../contexts/CustomTheme/useCustomTheme";

export const Header = () => {
    const { isAuthenticated, handleLogout } = useAuthentication();
    const { handleTheme, themeName } = useCustomTheme();

    const handleClickAuth = () => {
        handleLogout()     
    };

    return(
        <HeaderStyled>
            <TitleStyled>connect lab</TitleStyled>
            {            
                isAuthenticated ? (
                <>
                    <Button className='theme' onClick={handleTheme}>
                        {
                            themeName === 'dark' ? 'Light' : 'Dark'
                        }
                    </Button>
                    <Nav/>
                    
                </>
                 ): <Button onClick={handleClickAuth}>Login</Button>              
            }           
        </HeaderStyled>
    )
}