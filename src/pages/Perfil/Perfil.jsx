import { H2Styled, H3Styled } from "../../components/Title";
import { SectionStyled, ImgStyled} from "./Perfil.styles";
import { Link } from "react-router-dom";
import { Button } from "../../components/AppButton/Button"
import { useAuthentication } from "../../contexts/Authentication/useAuthentication";
import { useState, useEffect } from "react";
import { Loading } from "../../components/Loading/Loading";

export const Perfil = () => {
    const { isAuthenticated, handleToEdit } = useAuthentication()
    const [ isLoading, setIsLoading ] = useState(true)

    const handleEditar = () => {
        handleToEdit()
    }

    useEffect(() => {
        setIsLoading(false)
    }, [])
    
    if(isLoading){
        return <Loading />      
    }

    return(
        <SectionStyled>
                <H2Styled>Meu perfil</H2Styled>            
                <ImgStyled src={isAuthenticated.user.photoUrl ? isAuthenticated.user.photoUrl : '../../../public/avatar.png'} alt="foto do perfil"></ImgStyled>              
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
