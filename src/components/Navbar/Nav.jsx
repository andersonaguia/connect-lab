import { NavStyles, UlStyles } from "./Nav.styles";
import { Link } from "react-router-dom";
import { Button } from "../AppButton/Button";
import { useAuthentication } from "../../contexts/Authentication/useAuthentication";

export const Nav = ()=> {
    const { isAuthenticated, handleLogout } = useAuthentication()    
    
    const handleClickAutenticacao = () => {
        if (isAuthenticated) {
          handleLogout()      
        }        
    };

    return(
        <NavStyles>
            <UlStyles>
                <li>
                    <Link to="/inicio">Inicio</Link> 
                </li>
                <li>
                    <Link to="/dispositivos">Dispositivos</Link> 
                </li>
                <li>
                    <Link to="/perfil">Perfil</Link> 
                </li>
                <li>
                    <Button onClick={handleClickAutenticacao}>Sair</Button> 
                </li>
            </UlStyles>                       
        </NavStyles>
    )
}