import { FormStyled, InputStyled, UlStyled } from "./Dispositivos.styles"
import { Button } from '../../components/AppButton/Button' 
import { useAuthentication } from "../../contexts/Authentication/useAuthentication";
import { useState, useEffect } from "react";
import { findAllDevices } from "../../utils/findAllDevices";
import { CardDispositivo } from "../../components/Cards/Dispositivo/CardDispositivo";
import { useForm } from "react-hook-form";
import { useProducts } from "../../contexts/Products/useProducts";

export const Dispositivos = () => {
    const { register, handleSubmit, getValues, reset} = useForm()
    const { isAuthenticated } = useAuthentication()
    const [ allDevices, setAllDevices ] = useState(null)
    const [ searchProducts, setSearchProducts ] = useState(null)
    const [isLoading, setIsLoading] = useState(true)   
    const { allPlaces } = useProducts()
    const [ backspace, setBackspace ] = useState(null)

    const onSubmit = (data) => {
        if(allDevices){            
            setSearchProducts(allDevices.filter((device)=> device.name.toLowerCase().includes(data.productName.toLowerCase()))) 
        }
        !searchProducts && console.log("Nenhum produto encontrado")
    }

    const handleBackspace = (event) => {
        event.keyCode === 8 && setBackspace(event.keyCode)       
    }    
   
    const clearSearch = () => {
        setSearchProducts(null)
        reset()
    }
        
    useEffect(() => {   
        if(backspace === 8 && getValues().productName === ''){
            setSearchProducts(null)
        } 

        if(searchProducts){
            searchProducts.length > 0 ? setAllDevices(searchProducts) : setSearchProducts(null)            
        }else{
            isAuthenticated &&
            findAllDevices(isAuthenticated?.token)
            .then((response) => {                     
                setAllDevices(response.data)                             
                setIsLoading(false)
            })
            .catch((error) => {
                console.log("ERRO: ", error)
            })
        }             
                          
    }, [searchProducts, isAuthenticated])
    
   if(isLoading){
        <h2>Carregando dados...</h2>
    }    

    return(
        <>
            <section>
                <FormStyled onSubmit={handleSubmit(onSubmit)}>
                    <InputStyled onKeyUp={handleBackspace} type="text" placeholder="Digite o nome do dispositivo" {...register("productName", {onChange: (e) => {
                       onSubmit(getValues())
                    }})}/>
                    {
                        searchProducts ? <Button onClick={clearSearch}>Limpar</Button> : <Button type="submit">Buscar</Button>
                    }
                </FormStyled>
            </section>
            <UlStyled>
                {
                    allDevices ? 
                        allDevices.map((product) => (
                            <CardDispositivo key={product._id} product={product} locals={allPlaces}/>
                        )): <h2>Carregando produtos...</h2>
                }
            </UlStyled>
        </>       
    )
}