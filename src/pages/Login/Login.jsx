import { Button } from "../../components/AppButton/Button";
import { InputStyled } from "../../components/AppInput/Input.styles";
import { Link, useNavigate } from "react-router-dom";
import { SectionStyled, DivStyled, FormStyled, DivName } from "./Login.styles";
import { yupResolver } from '@hookform/resolvers/yup'
import YupPassword from "yup-password"; 
import * as yup from "yup";
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from "react-hook-form";
import { useAuthentication } from "../../contexts/Authentication/useAuthentication";
import { useState, useEffect } from "react";
import { Loading } from '../../components/Loading/Loading'

YupPassword(yup)

const schema = yup.object({
    email: yup.string().email('Digite um e-mail válido').required('Obrigatório informar o e-mail'),
    password: yup.string().required('Obrigatório digitar uma senha')
  }).required();

export const Login = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const { isAuthenticated, handleLogin } = useAuthentication();
    const navigate = useNavigate()
    const [ isLoading, setIsLoading ] = useState(true)

    const onSubmit = (data) => {      
        handleLogin(data)
    }

    useEffect(() => {
        setIsLoading(false)
    }, [])

    if(isLoading){
        return <Loading />
    }
    
    if (isAuthenticated) {        
        navigate('/inicio')       
    }   

    return(
        <SectionStyled>
            <ToastContainer theme="dark"/>
            <h2>Entrar</h2>            
            <DivName>
                <p>Novo usuário?</p> <Link to="/cadastro">Crie uma conta</Link>
            </DivName>
            <FormStyled onSubmit={handleSubmit(onSubmit)}>                
                    <DivStyled>
                        <label htmlFor='email'>E-mail</label>
                        <InputStyled type='email' id='email' placeholder='Seu e-mail' {...register ('email')}/>
                        <span hidden={true}>{toast.error(errors.email?.message)}</span> 
                    </DivStyled>
                    <DivStyled>
                        <label htmlFor='senha'>Senha</label>
                        <InputStyled type='password' id='senha' placeholder='Sua senha' {...register('password')}/>
                        <span hidden={true}>{toast.error(errors.password?.message)}</span>
                    </DivStyled>                 
                    <Button type="submit">Acessar</Button>              
            </FormStyled>                 
        </SectionStyled>
    )
}