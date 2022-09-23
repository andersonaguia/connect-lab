// import { CardDispositivo } from "../../components/Cards/Dispositivo/CardDispositivo"
import { H2Styled, H3Styled} from "../../components/Title"
import { SectionStyled , DivStyled, SectionStyledGrid, UlStyled, UlButtonStyled } from "./Inicio.styles"
import PropTypes from 'prop-types'
import { useAuthentication } from "../../contexts/Authentication/useAuthentication";
// import { checkWheather } from "../../utils/checkWeather";
import { useState, useEffect } from "react";
import { convertTemp } from "../../utils/convertTemp";
import { findUserDevices } from "../../utils/findUserDevices";
import { CardUserDevice } from "../../components/Cards/UserDevice/CardUserDevice";
import { ButtonSecondary } from "../../components/AppButton/Secondary/ButtonSecondary";
import { useProducts } from "../../contexts/Products/useProducts";

export const Inicio = () => {
    const { isAuthenticated, handleWeather, hasWeather } = useAuthentication();
    const { deviceStatus } = useProducts();
    const [isLoading, setIsLoading] = useState(true)
    const [ userDevices, setUserDevices ] = useState(null)
    const [ userLocals, setUserLocals ] = useState(['Todos'])
    const [ search, setSearch ] = useState(null)
    const [ control, setControl ] = useState(false)

    const handleSearch = (item) => {        
        setSearch(item)        
    }

    useEffect(() => {            
            setControl(deviceStatus)               
            if(isAuthenticated){
                // console.log("AUTENTICAÇÃO: ", isAuthenticated)           
                handleWeather()                          
                findUserDevices(isAuthenticated.token, isAuthenticated.user._id)
                .then((response) => {
                    if(!search){
                        setUserLocals((locals => [...locals, ...new Set(response.data.map((device) => device.local.description))]))
                        setSearch('Todos')
                        setIsLoading(false)
                    }               
                    search === 'Todos' ? setUserDevices(response.data) : setUserDevices(response.data.filter((device) => device.local.description === search))               
                })
                .catch((error) => {
                    console.log(error)
                })
            }
                          
    }, [isAuthenticated, search, deviceStatus, control])
     
    // console.log(dataWheather)
    // console.log("DISPOSITIVOS: ", userDevices)
    // console.log("LOCAIS: ", userLocals)    
    // console.log(search)
    console.log(deviceStatus)

    if(isLoading){
        return <h2>Carregando dados...</h2>
    }
    
    return(       
        <DivStyled>       
            <SectionStyled>
                <ul>
                    <li>
                        <H2Styled>{convertTemp(hasWeather.main?.temp)} ºC</H2Styled>
                    </li>
                    <li>
                        <H3Styled>{isAuthenticated.user.userAddress.city}, {isAuthenticated.user.userAddress.state}</H3Styled>
                    </li>
                    <li>
                        <p>Sensação Térmica: {convertTemp(hasWeather.main?.feels_like)} ºC</p>   
                    </li>
                    <li>
                        <p>Umidade: {hasWeather.main?.humidity} %</p>
                    </li>
                </ul>               
                <img src={`https://openweathermap.org/img/wn/${hasWeather.weather[0]?.icon}@4x.png`} alt="imagem clima" />
            </SectionStyled>
            <UlButtonStyled>
                {
                    userLocals.length > 1 &&
                        userLocals.map((place) => (
                            <ButtonSecondary key={place._id} whenFiltering={handleSearch} item={place}>{place}</ButtonSecondary>
                        ))
                } 
            </UlButtonStyled>
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
