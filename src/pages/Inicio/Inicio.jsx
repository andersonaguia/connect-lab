// import { CardDispositivo } from "../../components/Cards/Dispositivo/CardDispositivo"
import { H2Styled, H3Styled} from "../../components/Title"
import { SectionStyled , DivStyled, SectionStyledGrid, UlStyled } from "./Inicio.styles"
import PropTypes from 'prop-types'
import { useAuthentication } from "../../contexts/Authentication/useAuthentication";
import { checkWheather } from "../../utils/checkWheather";
import { useState, useEffect } from "react";
import { convertTemp } from "../../utils/convertTemp";
import { findUserDevices } from "../../utils/findUserDevices";
import { CardUserDevice } from "../../components/Cards/UserDevice/CardUserDevice";

export const Inicio = () => {
    const { isAuthenticated } = useAuthentication();
    const [dataWheather, setDataWheather] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [ userDevices, setUserDevices ] = useState(null)

    useEffect(() => {        
        if(isAuthenticated){
            checkWheather(isAuthenticated.user?.userAddress?.city)
            .then((response) => {            
                 setDataWheather(response.data)
                 setIsLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setDataWheather(null)                
                setIsLoading(false)
            }) 
            
            findUserDevices(isAuthenticated.token, isAuthenticated.user._id)
            .then((response) => {
                setUserDevices(response.data)
                
            })
            .catch((error) => {
                console.log(error)
            })
        }             
    }, [])

    console.log(dataWheather)
    console.log("DISPOSITIVOS: ", userDevices)
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
                <UlStyled>
                    {
                        userDevices ? 
                            userDevices.map((device) => (
                                <CardUserDevice key={device._id} device={device} />
                            )): <h2>Carregando produtos...</h2>
                    }
                </UlStyled>
            </SectionStyledGrid>
        </DivStyled>             
    )
}

Inicio.propTypes = {
    imagem: PropTypes.string,
    nome: PropTypes.string,
}
