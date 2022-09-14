import { H2Styled } from "../../Title";
import { Button } from "../../Button/Button";
import { InputStyled } from "../../Input/Input.styles";
import { SectionStyled, DivStyled, FormStyled } from "../Cadastro/FormCadastro.styles";
import { LabelStyled } from "../../Label/Label.styles";

import PropTypes from 'prop-types'
import { light } from "../../Themes";

import { Link } from "react-router-dom";

const handleSubmit = (e)=>{
    e.preventDefault()
   console.log("clicou")
}

export const FormCadastro = ({direction, gap, editar=false}) => {
    const {colors} = light
    return(
        <SectionStyled width="826px" height="716px" display="flex" direction="column" justify="center" color={"#ffffff"}>
            <H2Styled color={colors.primary.dark}>
                {
                editar ? "Editar" : "Cadastrar"
                }
            </H2Styled>            
            <FormStyled onSubmit={(e)=>handleSubmit(e)}>
                <DivStyled direction="row" gap="20px">                
                    <DivStyled direction="column" gap="5px">
                        <DivStyled direction="column">
                            <LabelStyled htmlFor="nome" color={colors.primary.dark}>Nome completo*</LabelStyled>
                            <InputStyled id="nome" placeholder="Seu nome" width="358px" height="34px" color={colors.primary.dark}/>
                        </DivStyled>
                        <DivStyled direction="column">
                            <LabelStyled htmlFor="email" color={colors.primary.dark}>E-mail*</LabelStyled>
                            <InputStyled id="email" placeholder="Seu e-mail" width="358px" height="34px" color={colors.primary.dark}/>
                        </DivStyled>                    
                        <DivStyled direction="column">
                            <LabelStyled htmlFor="foto" color={colors.primary.dark}>URL foto do perfil</LabelStyled>
                            <InputStyled id="foto" placeholder="Sua foto" width="358px" height="34px" color={colors.primary.dark}/>
                        </DivStyled>
                        <DivStyled direction="column">
                            <LabelStyled htmlFor="telefone" color={colors.primary.dark}>Telefone</LabelStyled>
                            <InputStyled id="telefone" placeholder="Seu telefone" width="358px" height="34px" color={colors.primary.dark}/>
                        </DivStyled>                   
                        <DivStyled direction="column">
                            <LabelStyled htmlFor="senha" color={colors.primary.dark}>Senha*</LabelStyled>
                            <InputStyled id="senha" placeholder="Sua senha" width="358px" height="34px" color={colors.primary.dark}/>
                        </DivStyled>
                        <DivStyled direction="column">
                            <LabelStyled htmlFor="confirmacao" color={colors.primary.dark}>Confirmação de senha*</LabelStyled>
                            <InputStyled id="confirmacao" placeholder="Digite sua senha novamente" width="358px" height="34px" color={colors.primary.dark}/>
                        </DivStyled>
                    </DivStyled>           
                    <DivStyled direction="column" gap="5px">
                        <DivStyled direction="column">
                            <LabelStyled htmlFor="cep" color={colors.primary.dark}>CEP*</LabelStyled>
                            <InputStyled id="cep" placeholder="Seu CEP" width="358px" height="34px" color={colors.primary.dark}/>
                        </DivStyled>
                        <DivStyled direction="column">
                            <LabelStyled htmlFor="endereco" color={colors.primary.dark}>Logradouro/Endereço*</LabelStyled>
                            <InputStyled id="endereco" placeholder="Seu logradouro/endereço" width="358px" height="34px" color={colors.primary.dark}/>
                        </DivStyled>                   
                        <DivStyled direction="column">
                            <LabelStyled htmlFor="cidade" color={colors.primary.dark}>Cidade*</LabelStyled>
                            <InputStyled id="cidade" placeholder="Sua cidade" width="358px" height="34px" color={colors.primary.dark}/>
                        </DivStyled>
                        <DivStyled direction="column">
                            <LabelStyled htmlFor="complemento" color={colors.primary.dark}>Complemento</LabelStyled>
                            <InputStyled id="complemento" placeholder="Seu complemento" width="358px" height="34px" color={colors.primary.dark}/>
                        </DivStyled>                   
                        <DivStyled direction="column">
                            <LabelStyled htmlFor="numero" color={colors.primary.dark}>Número*</LabelStyled>
                            <InputStyled id="numero" placeholder="Seu número" width="358px" height="34px" color={colors.primary.dark}/>
                        </DivStyled>                   
                        <DivStyled direction="column">
                            <LabelStyled htmlFor="bairro" color={colors.primary.dark}>Bairro*</LabelStyled>
                            <InputStyled id="bairro" placeholder="Seu bairro" width="358px" height="34px" color={colors.primary.dark}/>
                        </DivStyled>
                    </DivStyled>  
                </DivStyled>                              
                <Button name="Cadastrar" type="submit" background="#333333"/>               
            </FormStyled>   
            <Link to="/login">Login</Link>             
        </SectionStyled>
    )
}

FormCadastro.propTypes = {
    direction: PropTypes.string,
    gap: PropTypes.string,
    editar: PropTypes.bool.isRequired
}