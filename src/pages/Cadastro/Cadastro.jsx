import { Button } from "../../components/AppButton/Button";
import { InputStyled } from "../../components/AppInput/Input.styles";
import { DivContainerStyled, DivStyled, FormStyled } from "./Cadastro.styles";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import YupPassword from "yup-password"; 
import * as yup from "yup";
import { checkCep } from "../../services/checkCep";
import { createUser } from "../../services/createUser";
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useAuthentication } from '../../contexts/Authentication/useAuthentication'
import { updateUser } from '../../services/updateUser'
import { useState, useEffect } from 'react'
import { Loading } from '../../components/Loading/Loading'

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
    passwordConfirmation: yup.string().required('Obrigatório confirmar a senha')
        .oneOf([yup.ref('password'), null], 'Senhas digitadas não conferem'),
    fullName: yup.string().matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ' ]+$/, 'Digite um nome válido').min(8, 'Digite seu nome e sobrenome').required('Obrigatório informar um nome'), 
    photoUrl: yup.string().url('Digite uma URL válida'),
    phone: yup.string().matches(/[0-9]{0}/, 'Digite um número de telefone válido'),
    userAddress: yup.object({
        zipCode: yup.string().typeError().matches(/[0-9]{8}/, 'CEP deve conter 8 números')
        .required('Obrigatório informar o CEP'),
        street: yup.string().matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ' ]+$/, 'Digite um nome válido').min(2, 'Digite o nome completo (Ex: Rua do Sucesso').required('Obrigatório informar o nome da rua'),    
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

export const Cadastro = () => {    
    const { register, handleSubmit, trigger, setValue, setFocus, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });     
    const { isAuthenticated, handleLogin } = useAuthentication()
    const [enterData, setEnterData] = useState(true)    
    const [ isLoading, setIsLoading ] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        setIsLoading(false)
    }, [])
    
    if(isLoading){
        return <Loading />      
    }     

    if(isAuthenticated && enterData){
        setValue('fullName', isAuthenticated.user.fullName)
        setValue('email', isAuthenticated.user.email)
        setValue('photoUrl', isAuthenticated.user.photoUrl)
        setValue('phone', isAuthenticated.user.phone)
        setValue('userAddress.city', isAuthenticated.user.userAddress.city)
        setValue('userAddress.street', isAuthenticated.user.userAddress.street)
        setValue('userAddress.neighborhood', isAuthenticated.user.userAddress.neighborhood)
        setValue('userAddress.state', isAuthenticated.user.userAddress.state)
        setValue('userAddress.number', isAuthenticated.user.userAddress.number)
        setValue('userAddress.zipCode', isAuthenticated.user.userAddress.zipCode)
        setValue('userAddress.complement', isAuthenticated.user.userAddress.complement)
        setEnterData(false)
    }      
    
    const onSubmit = (body) => {
        if(isAuthenticated){
            updateUser(isAuthenticated.token, isAuthenticated.user._id, body)
            .then((response) => {
                toast.success("Dados atualizados com sucesso!") 
                sessionStorage.clear();
                reset() 
                handleLogin()
                setTimeout(() => {
                    navigate('/login')
                }, 2000);                      
            })
            .catch((error) => {
                console.error("Erro: ", error.code)
                toast.error("Falha ao atualizar dados!")
            })  
            toast.promise(updateUser, {
                pending: "Salvando dados"
            })   
         }
          else{
             createUser(body) 
             .then((response) => {       
                sessionStorage.setItem('userData', JSON.stringify(response.data));
                console.log("USER DATA: ")                
                toast.success("Usuário cadastrado com sucesso!") 
                reset() 
                setTimeout(() => {
                    navigate('/login')
                }, 2000);                               
            })
            .catch((error) => {
                console.error("Erro: ", error.code)
                toast.error("Falha ao cadastrar o usuário! Tente novamente.")
                   
            })  
            toast.promise(createUser, {
                pending: "Salvando dados"
            })   
         }        
    }    

    const fillDataByCep = (cep) => {
        checkCep(cep)
        .then((response) => {
            if(response.data.erro === 'true'){
                triggerError('userAddress.zipCode', 'userAddress.street')                
                setFocus('useAddress.street')                
            }else{
                setValue('userAddress.city', response.data.localidade)
                setValue('userAddress.street', response.data.logradouro)
                setValue('userAddress.neighborhood', response.data.bairro)
                setValue('userAddress.state', response.data.uf)
                setFocus('userAddress.number')
            }            
        })
        .catch((error) => {
            console.error("Erro: ", error.response.data);
        })
        toast.promise(checkCep, {
            pending: "Buscando CEP"
        })
    }
    
    const triggerError = (inputName, nextInput) => {        
            trigger(inputName)
                .then(isValid => isValid ? setFocus(nextInput) : setFocus(inputName))
    }
    
    return(
        isLoading ? <Loading /> : 
        <DivContainerStyled>         
            <h2>{ isAuthenticated ? "Meu Perfil" : "Cadastrar" }</h2>  
            <ToastContainer theme="dark"/>          
            <FormStyled onSubmit={handleSubmit(onSubmit)}>
                <div className="inputs">
                <DivStyled>
                            <label htmlFor="nome" >Nome completo*</label>
                            <InputStyled type="text" id="nome" placeholder="Seu nome" {...register("fullName")}/>
                            <span hidden={true}>{toast.error(errors.fullName?.message)}</span>                            
                        </DivStyled>
                        <DivStyled direction="column">
                            <label htmlFor="email" >E-mail*</label>
                            <InputStyled type="email" id="email" placeholder="Seu e-mail" {...register("email")}/>
                            <span hidden={true}>{toast.error(errors.email?.message)}</span>
                        </DivStyled>                    
                        <DivStyled direction="column">
                            <label type='text' htmlFor="foto" >URL foto do perfil</label>
                            <InputStyled id="foto" placeholder="Sua foto" {...register("photoUrl")}/>
                            <span hidden={true}>{toast.error(errors.photoUrl?.message)}</span>
                        </DivStyled>
                        <DivStyled direction="column">
                            <label htmlFor="telefone" >Telefone</label>
                            <InputStyled type="text" id="telefone" placeholder="Seu telefone" {...register("phone")}/>
                            <span hidden={true}>{toast.error(errors.phone?.message)}</span>
                        </DivStyled>                   
                        <DivStyled direction="column">
                            <label htmlFor="senha" >Senha*</label>
                            <InputStyled  type="password" id="senha" placeholder="Sua senha" {...register("password")}/>
                            <span hidden={true}>{toast.error(errors.password?.message)}</span>
                        </DivStyled>
                        <DivStyled direction="column">
                            <label htmlFor="confirmacao" >Confirmação de senha*</label>
                            <InputStyled type="password" id="confirmacao" placeholder="Digite sua senha novamente" {...register("passwordConfirmation")}/>
                            <span hidden={true}>{toast.error(errors.passwordConfirmation?.message)}</span>
                        </DivStyled>                 
                        <DivStyled direction="column">
                            <label htmlFor="cep" >CEP*</label>
                            <InputStyled type="text" id="cep" placeholder="Seu CEP" maxLength="8" {...register("userAddress.zipCode", {
                                onBlur: (e) => {
                                    trigger("userAddress.zipCode")
                                        .then(isValid => isValid && fillDataByCep(e.target.value))
                                    triggerError('userAddress.zipCode', '')
                                }
                            })}/>
                            <span hidden={true}>{toast.error(errors.userAddress?.zipCode?.message)}</span>
                        </DivStyled>
                        <DivStyled direction="column">
                            <label htmlFor="endereco" >Logradouro/Endereço*</label>
                            <InputStyled type='text' id="endereco" placeholder="Seu logradouro/endereço" {...register("userAddress.street")}/>
                            <span hidden={true}>{toast.error(errors.userAddress?.street?.message)}</span>
                        </DivStyled>                   
                        <DivStyled direction="column">
                            <label htmlFor="cidade" >Cidade*</label>
                            <InputStyled type='text' id="cidade" placeholder="Sua cidade" {...register("userAddress.city")}/>
                            <span hidden={true}>{toast.error(errors.userAddress?.city?.message)}</span>
                        </DivStyled>
                        <DivStyled direction="column">
                            <label htmlFor="estado" >Estado*</label>
                            <InputStyled type='text' id="estado" placeholder="Seu estado" {...register("userAddress.state")}/>
                            <span hidden={true}>{toast.error(errors.userAddress?.state?.message)}</span>
                        </DivStyled>
                        <DivStyled direction="column">
                            <label htmlFor="complemento" >Complemento</label>
                            <InputStyled type='text' id="complemento" placeholder="Seu complemento" {...register("userAddress.complement")}/>
                            <span hidden={true}>{toast.error(errors.userAddress?.complement?.message)}</span>
                        </DivStyled>                   
                        <DivStyled direction="column">
                            <label htmlFor="numero" >Número*</label>
                            <InputStyled type="number" id="numero" placeholder="Seu número" {...register("userAddress.number")}/>
                            <span hidden={true}>{toast.error(errors.userAddress?.number?.message)}</span>
                        </DivStyled>                   
                        <DivStyled direction="column">
                            <label htmlFor="bairro" >Bairro*</label>
                            <InputStyled type='text' id="bairro" placeholder="Seu bairro" {...register("userAddress.neighborhood")}/>
                            <span hidden={true}>{toast.error(errors.userAddress?.neighborhood?.message)}</span>                   
                    </DivStyled>                
                </div>                
                                                      
                <Button type="submit">{isAuthenticated ? "Salvar" : "Cadastrar"}</Button>              
            </FormStyled>  
            {
                isAuthenticated ? <Link to="/perfil">Cancelar</Link> : <Link to="/login">Login</Link>
            }                         
        </DivContainerStyled>        
    )
}