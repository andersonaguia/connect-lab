import { NavStyles, UlStyles } from "./Nav.styles";
import { Link } from "react-router-dom";

export const Nav = ()=> {
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
            </UlStyles>                       
        </NavStyles>
    )
}