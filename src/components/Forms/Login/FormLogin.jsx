import { H2Styled } from "../../Title";
import { Button } from "../../Button/Button";
import { InputStyled } from "../../Input/Input.styles";
import { LabelStyled } from "../../Label/Label.styles";
import { light } from "../../Themes";
import { Link } from "react-router-dom";
import { SectionStyled, DivStyled, FormStyled } from "./FormLogin.styles";
import PropTypes from 'prop-types'

const handleSubmit = (e)=>{
    e.preventDefault()
   console.log("clicou")
}

export const FormLogin = ({direction}) => {
    const {colors} = light
    return(
        <SectionStyled>
            <H2Styled color={colors.primary.dark}>Entrar</H2Styled>            
            <DivStyled direction="row">
                <p>Novo usuário?</p> <Link to="/cadastro">Crie uma conta</Link>
            </DivStyled>
            <FormStyled onSubmit={(e)=>handleSubmit(e)}>                
                    <DivStyled direction="column">
                        <LabelStyled htmlFor="email" color={colors.primary.dark}>E-mail</LabelStyled>
                        <InputStyled id="email" placeholder="Seu e-mail" width="250px" height="34px" color={colors.primary.dark}/>
                    </DivStyled>
                    <DivStyled direction="column">
                        <LabelStyled htmlFor="senha" color={colors.primary.dark}>Senha</LabelStyled>
                        <InputStyled id="senha" placeholder="Sua senha" width="250px" height="34px" color={colors.primary.dark}/>
                    </DivStyled>                 
                    <Button name="Acessar" type="submit"/>               
            </FormStyled>                 
        </SectionStyled>
    )
}

FormLogin.propTypes = {
    direction: PropTypes.string
}


