import { CardDispositivos } from "../../components/Cards/Dispositivo/CardDispositivo"
import { H2Styled, H3Styled} from "../../components/Title"
import { SectionStyled , DivStyled, SectionStyledGrid } from "./Inicio.styles"
import PropTypes from 'prop-types'
import { useAuthentication } from "../../contexts/Authentication/useAuthentication";
import { checkWheather } from "../../utils/checkWheather";
import { useState, useEffect } from "react";
import { convertTemp } from "../../utils/convertTemp";

export const Inicio = () => {
    const { isAuthenticated } = useAuthentication();
    const [dataWheather, setDataWheather] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    console.log(isAuthenticated)
    
    useEffect(() => {        
        if(isAuthenticated){
            checkWheather(isAuthenticated.user?.userAddress?.city)
            .then((response) => {            
                 setDataWheather(response.data)
                 console.log("CLIMA: ", dataWheather)
                 setIsLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setDataWheather(null)
                console.log(dataWheather)
                setIsLoading(false)
            })   
        }             
    }, [])

    if(isLoading){
        return <h2>Carregando dados...</h2>
    }
    
    return(       
        <DivStyled>       
            <SectionStyled>
                <ul>
                    <li>
                        <H2Styled>{convertTemp(dataWheather.main?.temp)} ºC</H2Styled>
                    </li>
                    <li>
                        <H3Styled>{isAuthenticated.user.userAddress.city}, {isAuthenticated.user.userAddress.state}</H3Styled>
                    </li>
                    <li>
                        <p>Sensação Térmica: {convertTemp(dataWheather.main?.feels_like)} ºC</p>   
                    </li>
                    <li>
                        <p>Umidade: {dataWheather.main?.humidity} %</p>
                    </li>
                </ul>               
                <img src={`https://openweathermap.org/img/wn/${dataWheather.weather[0]?.icon}@4x.png`} alt="imagem clima" />
            </SectionStyled>
            <SectionStyledGrid>            
                <CardDispositivos imagem="teste" nome="Dispositivo 1" local="Casa" agrupamento="Quarto" estado="OFF"/>           
            </SectionStyledGrid>
        </DivStyled>             
    )
}

Inicio.propTypes = {
    imagem: PropTypes.string,
    nome: PropTypes.string,
}
