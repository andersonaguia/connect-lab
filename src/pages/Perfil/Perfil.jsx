import { H2Styled, H3Styled } from "../../components/Title";
import { SectionStyled, ImgStyled} from "./Perfil.styles";
import { Link } from "react-router-dom";
import { Button } from "../../components/AppButton/Button"
import { useAuthentication } from "../../contexts/Authentication/useAuthentication";

export const Perfil = () => {
    const { isAuthenticated, handleToEdit } = useAuthentication()

    const handleEditar = () => {
        handleToEdit()
    }

    return(
        <SectionStyled>
                <H2Styled>Meu perfil</H2Styled>            
                <ImgStyled src={isAuthenticated.user.photoUrl} alt="foto do perfil"></ImgStyled>              
                <H3Styled>{isAuthenticated.user.fullName}</H3Styled>                                       
                <a href="/">{isAuthenticated.user.email}</a>
                <p>
                    { 
                        isAuthenticated.user.phone.length > 0 && isAuthenticated.user.phone
                    }
                </p>  
                <ul>
                    <H3Styled>Endereço</H3Styled>
                    <li>
                        <p>{isAuthenticated.user.userAddress.zipCode}</p>
                    </li>
                    <li>
                        <p>
                            <small>
                                {
                                    `${isAuthenticated.user.userAddress.street}, ${isAuthenticated.user.userAddress.number}`
                                    
                                }
                            </small>
                        </p>
                    </li> 
                    {
                        isAuthenticated.user.userAddress.complement.length > 0 && 
                        <li>
                            <p><small>{isAuthenticated.user.userAddress.complement}</small></p>
                        </li>
                    }                   
                    <li>
                        <p>
                            <small>
                                {`${isAuthenticated.user.userAddress.neighborhood} - ${isAuthenticated.user.userAddress.city} - ${isAuthenticated.user.userAddress.state}`}
                            </small>
                        </p>
                    </li>
                </ul>               
                <Link to="/cadastro"><Button onClick={handleEditar}>Editar</Button></Link>                    
                <Link to="/inicio">Sair</Link>                  
        </SectionStyled>
    )
}
