import { Button } from "../../components/Button/Button";
import { InputStyled } from "../../components/Input/Input.styles";
import { SectionStyled, DivStyled, FormStyled } from "./Cadastro.styles";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
// import { createUser } from "../../utils/CreateUser";

// const body = {
//     "email": "patricia@teste.com.br",
//     "password": "12345678",
//     "fullName": "Patricia Rocha",
//     "photoUrl": "",
//     "phone": "(47) 99999-9999",
//     "userAddress": {
//         "zipCode": "85500-000",
//         "street": "Avenida Antônio Lira",
//         "number": "751",
//         "neighborhood": "Bairro XYZ",
//         "city": "João Pessoa",
//         "state": "Paraíba",
//         "complement": "Ap 204"
//     }
// }

// const handleSubmit = (body, e) => {
//     e.preventDefault()
//     console.log(body)
//     createUser(body)
//     .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.error("Erro: ", error.response.data);
//       })
// }



export const Cadastro = ({direction, gap, editar=false}) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    
    return(
        <SectionStyled>
            <h2>
                {
                editar ? "Editar" : "Cadastrar"
                }
            </h2>            
            <FormStyled onSubmit={handleSubmit(onSubmit)}>
                <DivStyled direction="row" gap="20px">                
                    <DivStyled direction="column" gap="5px">
                        <DivStyled direction="column">
                            <label htmlFor="nome" >Nome completo*</label>
                            <InputStyled id="nome" placeholder="Seu nome" width="358px" height="34px" {...register("fullName")}/>
                        </DivStyled>
                        <DivStyled direction="column">
                            <label htmlFor="email" >E-mail*</label>
                            <InputStyled id="email" placeholder="Seu e-mail" width="358px" height="34px" {...register("email")}/>
                        </DivStyled>                    
                        <DivStyled direction="column">
                            <label htmlFor="foto" >URL foto do perfil</label>
                            <InputStyled id="foto" placeholder="Sua foto" width="358px" height="34px" {...register("photoUrl")}/>
                        </DivStyled>
                        <DivStyled direction="column">
                            <label htmlFor="telefone" >Telefone</label>
                            <InputStyled id="telefone" placeholder="Seu telefone" width="358px" height="34px" {...register("phone")}/>
                        </DivStyled>                   
                        <DivStyled direction="column">
                            <label htmlFor="senha" >Senha*</label>
                            <InputStyled id="senha" placeholder="Sua senha" width="358px" height="34px" {...register("password")}/>
                        </DivStyled>
                        <DivStyled direction="column">
                            <label htmlFor="confirmacao" >Confirmação de senha*</label>
                            <InputStyled id="confirmacao" placeholder="Digite sua senha novamente" width="358px" height="34px" />
                        </DivStyled>
                    </DivStyled>           
                    <DivStyled direction="column" gap="5px">
                        <DivStyled direction="column">
                            <label htmlFor="cep" >CEP*</label>
                            <InputStyled id="cep" placeholder="Seu CEP" width="358px" height="34px" {...register("zipCode")}/>
                        </DivStyled>
                        <DivStyled direction="column">
                            <label htmlFor="endereco" >Logradouro/Endereço*</label>
                            <InputStyled id="endereco" placeholder="Seu logradouro/endereço" width="358px" height="34px" {...register("street")}/>
                        </DivStyled>                   
                        <DivStyled direction="column">
                            <label htmlFor="cidade" >Cidade*</label>
                            <InputStyled id="cidade" placeholder="Sua cidade" width="358px" height="34px" {...register("city")}/>
                        </DivStyled>
                        <DivStyled direction="column">
                            <label htmlFor="complemento" >Complemento</label>
                            <InputStyled id="complemento" placeholder="Seu complemento" width="358px" height="34px" {...register("complement")}/>
                        </DivStyled>                   
                        <DivStyled direction="column">
                            <label htmlFor="numero" >Número*</label>
                            <InputStyled id="numero" placeholder="Seu número" width="358px" height="34px" {...register("number")}/>
                        </DivStyled>                   
                        <DivStyled direction="column">
                            <label htmlFor="bairro" >Bairro*</label>
                            <InputStyled id="bairro" placeholder="Seu bairro" width="358px" height="34px" {...register("neighborhood")}/>
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