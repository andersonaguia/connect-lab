import { Button } from "../../components/Button/Button";
import { InputStyled } from "../../components/Input/Input.styles";
import { SectionStyled, DivStyled, FormStyled } from "./Cadastro.styles";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import YupPassword from "yup-password"; 
import * as yup from "yup";
import { checkCep } from "../../utils/checkCEP";
// import { useState } from "react";
// import { createUser } from "../../utils/CreateUser";

YupPassword(yup)

const schema = yup.object({
    email: yup.string().email('Digite um e-mail válido').required('Obrigatório informar o e-mail'),
    password: yup.string()
        .required('Obrigatório digitar uma senha')
        .min(8, 'Senha deve possuir ao menos 8 dígitos')
        .minLowercase(1, 'Senha deve possuir uma letra minúscula')
        .minUppercase(1, 'Senha deve possuir uma letra maiúscula')
        .minNumbers(1, 'Senha deve possuir um numero')
        .minSymbols(1, 'Senha deve possuir um caractere especial'),
    passwordConfirmation: yup.string().required('Digite sua senha novamente')
        .oneOf([yup.ref('password'), null], 'Senhas digitadas não conferem'),
    fullName: yup.string().required('Obrigatório informar um nome'), 
    photoUrl: yup.string().url('Digite a URL da foto'),
    phone: yup.string(),
    userAddress: yup.object({
        zipCode: yup.string().typeError().matches(/[0-9]{8}/, 'CEP deve conter 8 números')
        .required('Obrigatório informar o CEP'),
        street: yup.string().required('Obrigatório informar o nome da rua'),    
        number: yup.number().typeError('Digite um número válido')
            .positive().typeError('Digite um número válido')
            .integer().typeError('Digite um número válido')
            .required('Digite o número do endereço'),
        neighborhood: yup.string().required('Obrigatório informar o bairro'),    
        city: yup.string().required('Obrigatório informar a cidade'),
        state: yup.string().required('Obrigatório informar o estado'),
        complement: yup.string(),
    })   
  }).required();

export const Cadastro = ({editar=false}) => {
    const { register, handleSubmit, trigger, setValue, setFocus, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    
    // const [ loading, setLoading ] = useState(false)
    
    const onSubmit = data => console.log(data);

    const fillDataByCep = (cep) => {
        checkCep(cep)
        .then((response) => {
            console.log(response.data)
            if(response.data.erro === 'true'){
                console.log(response.data.erro)
                setFocus('useAddress.street')                
            }else{
                setValue('userAddress.city', response.data.localidade)
                setValue('userAddress.street', response.data.logradouro)
                setValue('userAddress.neighborhood', response.data.bairro)
                setValue('userAddress.state', response.data.uf)
                setValue('userAddress.city', response.data.localidade)
                setFocus('userAddress.number')
            }
            
        })
        .catch((error) => {
            console.error("Erro: ", error.response.data);
        })
    }
    
    return(
        <SectionStyled>
            <h2>{ editar ? "Editar" : "Cadastrar" }</h2>            
            <FormStyled onSubmit={handleSubmit(onSubmit)}>
                <DivStyled direction="row" gap="20px">                
                    <DivStyled direction="column" gap="5px">
                        <DivStyled direction="column">
                            <label htmlFor="nome" >Nome completo*</label>
                            <InputStyled id="nome" placeholder="Seu nome" width="358px" height="34px" {...register("fullName")}/>
                            <span>{errors.fullName?.message}</span>
                        </DivStyled>
                        <DivStyled direction="column">
                            <label htmlFor="email" >E-mail*</label>
                            <InputStyled id="email" placeholder="Seu e-mail" width="358px" height="34px" {...register("email")}/>
                            <span>{errors.email?.message}</span>
                        </DivStyled>                    
                        <DivStyled direction="column">
                            <label htmlFor="foto" >URL foto do perfil</label>
                            <InputStyled id="foto" placeholder="Sua foto" width="358px" height="34px" {...register("photoUrl")}/>
                            <span>{errors.photoUrl?.message}</span>
                        </DivStyled>
                        <DivStyled direction="column">
                            <label htmlFor="telefone" >Telefone</label>
                            <InputStyled id="telefone" placeholder="Seu telefone" width="358px" height="34px" {...register("phone")}/>
                            <span>{errors.phone?.message}</span>
                        </DivStyled>                   
                        <DivStyled direction="column">
                            <label htmlFor="senha" >Senha*</label>
                            <InputStyled  id="senha" placeholder="Sua senha" width="358px" height="34px" {...register("password")}/>
                            <span>{errors.password?.message}</span>
                        </DivStyled>
                        <DivStyled direction="column">
                            <label htmlFor="confirmacao" >Confirmação de senha*</label>
                            <InputStyled type="password" id="confirmacao" placeholder="Digite sua senha novamente" width="358px" height="34px" {...register("passwordConfirmation")}/>
                            <span>{errors.passwordConfirmation?.message}</span>
                        </DivStyled>
                    </DivStyled>           
                    <DivStyled direction="column" gap="5px">
                        <DivStyled direction="column">
                            <label htmlFor="cep" >CEP*</label>
                            <InputStyled type="text" id="cep" placeholder="Seu CEP" maxLength="8" width="358px" height="34px" {...register("userAddress.zipCode", {
                                onBlur: (e) => {
                                    trigger("userAddress.zipCode")
                                        .then(isValid => isValid && fillDataByCep(e.target.value))
                                }
                            })}/>
                            <span>{errors.userAddress?.zipCode?.message}</span>
                        </DivStyled>
                        <DivStyled direction="column">
                            <label htmlFor="endereco" >Logradouro/Endereço*</label>
                            <InputStyled id="endereco" placeholder="Seu logradouro/endereço" width="358px" height="34px" {...register("userAddress.street")}/>
                            <span>{errors.userAddress?.street?.message}</span>
                        </DivStyled>                   
                        <DivStyled direction="column">
                            <label htmlFor="cidade" >Cidade*</label>
                            <InputStyled id="cidade" placeholder="Sua cidade" width="358px" height="34px" {...register("userAddress.city")}/>
                            <span>{errors.userAddress?.city?.message}</span>
                        </DivStyled>
                        <DivStyled direction="column">
                            <label htmlFor="estado" >Estado*</label>
                            <InputStyled id="estado" placeholder="Seu estado" width="358px" height="34px" {...register("userAddress.state")}/>
                            <span>{errors.userAddress?.state?.message}</span>
                        </DivStyled>
                        <DivStyled direction="column">
                            <label htmlFor="complemento" >Complemento</label>
                            <InputStyled id="complemento" placeholder="Seu complemento" width="358px" height="34px" {...register("userAddress.complement")}/>
                            <span>{errors.userAddress?.complement?.message}</span>
                        </DivStyled>                   
                        <DivStyled direction="column">
                            <label htmlFor="numero" >Número*</label>
                            <InputStyled type="number" id="numero" placeholder="Seu número" width="358px" height="34px" {...register("userAddress.number")}/>
                            <span>{errors.userAddress?.number?.message}</span>
                        </DivStyled>                   
                        <DivStyled direction="column">
                            <label htmlFor="bairro" >Bairro*</label>
                            <InputStyled id="bairro" placeholder="Seu bairro" width="358px" height="34px" {...register("userAddress.neighborhood")}/>
                            <span>{errors.userAddress?.neighborhood?.message}</span>
                        </DivStyled>
                    </DivStyled>  
                </DivStyled>                              
                <Button name="Cadastrar" type="submit" background="#333333"/>               
            </FormStyled>   
            <Link to="/login">Login</Link>             
        </SectionStyled>
    )
}

Cadastro.propTypes = {
    direction: PropTypes.string,
    gap: PropTypes.string,
    editar: PropTypes.bool
}