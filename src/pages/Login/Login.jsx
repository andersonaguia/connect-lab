import { Button } from "../../components/AppButton/Button";
import { InputStyled } from "../../components/AppInput/Input.styles";
import { Link } from "react-router-dom";
import { SectionStyled, DivStyled, FormStyled } from "./Login.styles";
import PropTypes from 'prop-types'

const handleSubmit = (e)=>{
    e.preventDefault()
   console.log("clicou")
}

export const Login = () => {
    return(
        <SectionStyled>
            <h2>Entrar</h2>            
            <DivStyled direction="row">
                <p>Novo usuário?</p> <Link to="/cadastro">Crie uma conta</Link>
            </DivStyled>
            <FormStyled onSubmit={(e)=>handleSubmit(e)}>                
                    <DivStyled direction="column">
                        <label htmlFor="email">E-mail</label>
                        <InputStyled id="email" placeholder="Seu e-mail" width="250px" height="34px"/>
                    </DivStyled>
                    <DivStyled direction="column">
                        <label htmlFor="senha">Senha</label>
                        <InputStyled id="senha" placeholder="Sua senha" width="250px" height="34px"/>
                    </DivStyled>                 
                    <Button name="Acessar" type="submit"/>               
            </FormStyled>                 
        </SectionStyled>
    )
}

Login.propTypes = {
    direction: PropTypes.string
}