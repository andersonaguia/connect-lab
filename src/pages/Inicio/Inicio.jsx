// import { CardDispositivo } from "../../components/Cards/Dispositivo/CardDispositivo"
import { H2Styled, H3Styled} from "../../components/Title"
import { SectionStyled , DivStyled, SectionStyledGrid, UlStyled, UlButtonStyled } from "./Inicio.styles"
import PropTypes from 'prop-types'
import { useAuthentication } from "../../contexts/Authentication/useAuthentication";
import { checkWheather } from "../../utils/checkWheather";
import { useState, useEffect } from "react";
import { convertTemp } from "../../utils/convertTemp";
import { findUserDevices } from "../../utils/findUserDevices";
import { CardUserDevice } from "../../components/Cards/UserDevice/CardUserDevice";
import { ButtonSecondary } from "../../components/AppButton/Secondary/ButtonSecondary";

export const Inicio = () => {
    const { isAuthenticated } = useAuthentication();
    const [dataWheather, setDataWheather] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [ userDevices, setUserDevices ] = useState(null)
    const [ userLocals, setUserLocals ] = useState(['Todos'])
    const [ search, setSearch ] = useState(null)

    const handleSearch = (item) => {        
        setSearch(item)        
    }

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
                if(!search){
                    setUserLocals((locals => [...locals, ...new Set(response.data.map((device) => device.local.description))]))
                    setSearch('Todos')
                }               
                search === 'Todos' ? setUserDevices(response.data) : setUserDevices(response.data.filter((device) => device.local.description === search))               
            })
            .catch((error) => {
                console.log(error)
            })
        }             
    }, [isAuthenticated, search])

    console.log(dataWheather)
    console.log("DISPOSITIVOS: ", userDevices)
    console.log("LOCAIS: ", userLocals)    
    console.log(search)

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
