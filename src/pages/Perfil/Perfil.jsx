import { H2Styled, H3Styled } from "../../components/Title";
import { SectionStyled, ImgStyled} from "./Perfil.styles";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button"

export const Perfil = () => {
    return(
        <SectionStyled>
            <H2Styled>Meu perfil</H2Styled>            
                <ImgStyled src="../../../public/vite.svg" alt="foto do perfil"></ImgStyled>              
                <H3Styled>nome completo</H3Styled>                                       
                <a href="/">email@email.com</a>
                <p>(48)99999-9999</p>               
                <H3Styled>Endereço</H3Styled>
                <p>85500-000</p>
                <p><small>Av. Antônio Lira, 751 - Ap 230 - Tambaú - João Pessoa - PB</small></p>
                <Link to="/cadastro"><Button name="Editar"/></Link>                    
                <Link to="/inicio">Sair</Link>                  
        </SectionStyled>
    )
}
