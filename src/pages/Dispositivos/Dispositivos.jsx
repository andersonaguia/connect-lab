import { FormStyled, InputStyled, UlStyled } from "./Dispositivos.styles"
import { Button } from '../../components/AppButton/Button' 
import { useAuthentication } from "../../contexts/Authentication/useAuthentication";
import { useState, useEffect } from "react";
import { findAllDevices } from "../../utils/findAllDevices";
import { CardDispositivo } from "../../components/Cards/Dispositivo/CardDispositivo";
import { useForm } from "react-hook-form";

export const Dispositivos = () => {
    const { register, handleSubmit, getValues} = useForm()
    const { isAuthenticated } = useAuthentication()
    const [ allDevices, setAllDevices ] = useState(null)
    const [ searchProducts, setSearchProducts ] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const onSubmit = (data) => {
        console.log("NOME DO PRODUTO: ", data.productName)
        if(allDevices){            
            setSearchProducts(allDevices.filter((device)=> device.name.toLowerCase().includes(data.productName.toLowerCase())))            
        }else{
            console.log("sem itens")
        }
        console.log("PRODUTOS FILTRADOS: ", searchProducts)
    }
    
    const handleKeyDown = (event) => {
        console.log(event.key)
        if(event.key === 'Backspace' && allDevices.length < 23){
            setSearchProducts(null)
        }
    }
        
    useEffect(() => {
        if(searchProducts){
            console.log("SEARCH PRODUCTS: ", searchProducts)
            searchProducts.length > 0 ? setAllDevices(searchProducts) : setSearchProducts(null)            
        }else{
            findAllDevices(isAuthenticated.token)
            .then((response) => {                     
                setAllDevices(response.data)                             
                setIsLoading(false)
            })
            .catch((error) => {
                console.log("ERRO: ", error)
            })
        }                     
                          
    }, [searchProducts])

    console.log("DEVICES: ", allDevices)

    
    
    if(isLoading){
        <h2>Carregando dados...</h2>
    }

    return(
        <>
            <section>
                <FormStyled onSubmit={handleSubmit(onSubmit)}>
                    <InputStyled type="text" placeholder="Digite o nome do dispositivo" onKeyDown={handleKeyDown} {...register("productName", {onChange: (e) => {
                       onSubmit(getValues())
                    }})}/>
                    <Button type="submit">Buscar</Button>
                </FormStyled>
            </section>
            <UlStyled>
                {
                    allDevices ? 
                        allDevices.map((product) => (
                            <CardDispositivo key={product._id} product={product}/>
                        )): <h2>Carregando produtos...</h2>
                }
            </UlStyled>
        </>       
    )
}