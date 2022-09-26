import { Nav } from "../Navbar/Nav"
import { DivStyled, HeaderStyled, TitleStyled, ImgStyled} from "./Header.styles"
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
        <DivStyled>
            <HeaderStyled>
                <ImgStyled src="/iot.png" alt="logo"></ImgStyled>
                <TitleStyled>connect lab</TitleStyled>
            </HeaderStyled>
            
            {            
                isAuthenticated ? (
                <>
                    <Button onClick={handleTheme}>
                        {
                            themeName === 'dark' ? 'Light' : 'Dark'
                        }
                    </Button>
                    <Nav/>
                    
                </>
                 ): <Button onClick={handleClickAuth}>Login</Button>              
            }           
        </DivStyled>
    )
}