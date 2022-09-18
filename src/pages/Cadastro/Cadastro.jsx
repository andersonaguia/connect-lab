import { Button } from "../../components/AppButton/Button";
import { InputStyled } from "../../components/AppInput/Input.styles";
import { SectionStyled, DivStyled, FormStyled } from "./Cadastro.styles";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import YupPassword from "yup-password"; 
import * as yup from "yup";
import { checkCep } from "../../utils/checkCEP";
import { createUser } from "../../utils/CreateUser";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

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
    fullName: yup.string().matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ' ]+$/, 'Digite um nome válido').min(8, 'Digite seu nome completo').required('Obrigatório informar um nome'), 
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

export const Cadastro = ({editar=false}) => {
    const { register, handleSubmit, trigger, setValue, setFocus, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });        
    
    // const [ loading, setLoading ] = useState(false)
    
    const onSubmit = (data) => {
        console.log(data)
        createUser(data)
        .then((response) => {
            toast.success("Dados cadastrados com sucesso!")
            console.log("RESPONSE: ", response)
            reset()
            sessionStorage.setItem('userData', JSON.stringify(response.data));
            setFocus('fullName')
            console.log("USER DATA: ")            
        })
        .catch((error) => {
            console.error("Erro: ", error.code)
        })  
        toast.promise(createUser, {
            pending: "Salvando dados"
        })      
    }

    const fillDataByCep = (cep) => {
        checkCep(cep)
        .then((response) => {
            // console.log(response.data)
            if(response.data.erro === 'true'){
                triggerError('userAddress.zipCode', 'userAddress.street')                
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
        toast.promise(checkCep, {
            pending: "Buscando CEP"
        })
    }
    
    const triggerError = (inputName, nextInput) => {        
            trigger(inputName)
                .then(isValid => isValid ? setFocus(nextInput) : setFocus(inputName))
    }
    
    return(
        <SectionStyled>            
            <h2>{ editar ? "Editar" : "Cadastrar" }</h2>  
            <ToastContainer theme="dark"/>          
            <FormStyled onSubmit={handleSubmit(onSubmit)}>                
                        <DivStyled>
                            <label htmlFor="nome" >Nome completo*</label>
                            <InputStyled type="text" id="nome" placeholder="Seu nome" {...register("fullName", {
                                onBlur: (e) => {
                                    triggerError('fullName', 'email')
                                }
                            })}/>
                            <span hidden={true}>{toast.error(errors.fullName?.message)}</span>                            
                        </DivStyled>
                        <DivStyled direction="column">
                            <label htmlFor="email" >E-mail*</label>
                            <InputStyled id="email" placeholder="Seu e-mail" {...register("email", {
                                onBlur: (e) => {
                                    triggerError('email', 'photoUrl')
                                }
                            })}/>
                            <span hidden={true}>{toast.error(errors.email?.message)}</span>
                        </DivStyled>                    
                        <DivStyled direction="column">
                            <label htmlFor="foto" >URL foto do perfil</label>
                            <InputStyled id="foto" placeholder="Sua foto" {...register("photoUrl", {
                                onBlur: (e) => {
                                    triggerError('photoUrl', 'phone')
                                }
                            })}/>
                            <span hidden={true}>{toast.error(errors.photoUrl?.message)}</span>
                        </DivStyled>
                        <DivStyled direction="column">
                            <label htmlFor="telefone" >Telefone</label>
                            <InputStyled id="telefone" placeholder="Seu telefone" {...register("phone", {
                                onBlur: (e) => {
                                    triggerError('phone', 'password')
                                }
                            })}/>
                            <span hidden={true}>{toast.error(errors.phone?.message)}</span>
                        </DivStyled>                   
                        <DivStyled direction="column">
                            <label htmlFor="senha" >Senha*</label>
                            <InputStyled  id="senha" placeholder="Sua senha" {...register("password", {
                                onBlur: (e) => {
                                    triggerError('password', 'passwordConfirmation')
                                }
                            })}/>
                            <span hidden={true}>{toast.error(errors.password?.message)}</span>
                        </DivStyled>
                        <DivStyled direction="column">
                            <label htmlFor="confirmacao" >Confirmação de senha*</label>
                            <InputStyled type="password" id="confirmacao" placeholder="Digite sua senha novamente" {...register("passwordConfirmation", {
                                onBlur: (e) => {
                                    triggerError('passwordConfirmation', 'userAddress.zipCode')
                                }
                            })}/>
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
                            <InputStyled id="endereco" placeholder="Seu logradouro/endereço" {...register("userAddress.street", {
                                onBlur: (e) => {
                                    triggerError('userAddress.street', 'userAddress.city')
                                }
                            })}/>
                            <span hidden={true}>{toast.error(errors.userAddress?.street?.message)}</span>
                        </DivStyled>                   
                        <DivStyled direction="column">
                            <label htmlFor="cidade" >Cidade*</label>
                            <InputStyled id="cidade" placeholder="Sua cidade" {...register("userAddress.city", {
                                onBlur: (e) => {
                                    triggerError('userAddress.city', 'userAddress.state')
                                }
                            })}/>
                            <span hidden={true}>{toast.error(errors.userAddress?.city?.message)}</span>
                        </DivStyled>
                        <DivStyled direction="column">
                            <label htmlFor="estado" >Estado*</label>
                            <InputStyled id="estado" placeholder="Seu estado" {...register("userAddress.state", {
                                onBlur: (e) => {
                                    triggerError('userAddress.state', 'userAddress.complement')
                                }
                            })}/>
                            <span hidden={true}>{toast.error(errors.userAddress?.state?.message)}</span>
                        </DivStyled>
                        <DivStyled direction="column">
                            <label htmlFor="complemento" >Complemento</label>
                            <InputStyled id="complemento" placeholder="Seu complemento" {...register("userAddress.complement", {
                                onBlur: (e) => {
                                    triggerError('userAddress.complement', 'userAddress.number')
                                }
                            })}/>
                            <span hidden={true}>{toast.error(errors.userAddress?.complement?.message)}</span>
                        </DivStyled>                   
                        <DivStyled direction="column">
                            <label htmlFor="numero" >Número*</label>
                            <InputStyled type="number" id="numero" placeholder="Seu número" {...register("userAddress.number", {
                                onBlur: (e) => {
                                    triggerError('userAddress.number', 'userAddress.neighborhood')
                                }
                            })}/>
                            <span hidden={true}>{toast.error(errors.userAddress?.number?.message)}</span>
                        </DivStyled>                   
                        <DivStyled direction="column">
                            <label htmlFor="bairro" >Bairro*</label>
                            <InputStyled id="bairro" placeholder="Seu bairro" {...register("userAddress.neighborhood", {
                                onBlur: (e) => {
                                    triggerError('userAddress.neighborhood', '')
                                }
                            })}/>
                            <span hidden={true}>{toast.error(errors.userAddress?.neighborhood?.message)}</span>                   
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