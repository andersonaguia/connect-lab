import { H2Styled, H3Styled} from "../../components/Title"
import { SectionStyled , DivStyled, SectionStyledGrid, UlStyled, UlButtonStyled } from "./Inicio.styles"
import PropTypes from 'prop-types'
import { useAuthentication } from "../../contexts/Authentication/useAuthentication";
import { useState, useEffect } from "react";
import { findUserDevices } from "../../services/findUserDevices";
import { CardUserDevice } from "../../components/Cards/UserDevice/CardUserDevice";
import { ButtonSecondary } from "../../components/AppButton/Secondary/ButtonSecondary";
import { useProducts } from "../../contexts/Products/useProducts";
import { Loading } from "../../components/Loading/Loading";
import { Link } from "react-router-dom";

export const Inicio = () => {
    const { isAuthenticated, handleWeather, hasWeather } = useAuthentication();
    const { deviceStatus, deviceDelete, allUserDevices } = useProducts()
    const [ isLoading, setIsLoading ] = useState(true)
    const [ userDevices, setUserDevices ] = useState(null)
    const [ userLocals, setUserLocals ] = useState(['Todos'])
    const [ search, setSearch ] = useState(null)

    const handleSearch = (item) => {        
        setSearch(item)        
    }    
    
    useEffect(() => {            
            if(isAuthenticated){ 
                handleWeather()                                               
                findUserDevices(isAuthenticated.token, isAuthenticated.user?._id)
                .then((response) => {
                    console.log(response)
                    if(!search){
                        setUserLocals(['Todos'])
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
            
    }, [isAuthenticated, search, deviceStatus,  deviceDelete, isLoading, allUserDevices])
    
    

    // console.log("Weather: ", hasWeather)
     console.log("DISPOSITIVOS: ", userDevices)
    console.log("LOCAIS: ", userLocals)    
    console.log("SEARCH: ", search)
    // console.log("DEVICE STATUS: ", deviceStatus)
    console.log("DELETE: ", deviceDelete)
    console.log("LOADING: ", isLoading)
      
    return(       
        <DivStyled> 
            {
                hasWeather ? (
                    <SectionStyled className="weather">
                        <ul>
                            <li>
                                <H2Styled>{hasWeather?.main?.temp} ºC</H2Styled>
                            </li>
                            <li>
                                <H3Styled>{isAuthenticated.user.userAddress.city}, {isAuthenticated.user.userAddress.state}</H3Styled>
                            </li>
                            <li>
                                <p>Sensação Térmica: {hasWeather?.main?.feels_like} ºC</p>   
                            </li>
                            <li>
                                <p>Umidade: {hasWeather?.main?.humidity} %</p>
                            </li>
                        </ul>               
                        <img src={`https://openweathermap.org/img/wn/${hasWeather?.weather[0]?.icon}@4x.png`} alt="imagem clima" />
                    </SectionStyled>
                ) : 
                (
                    <SectionStyled>
                        <h2>Falha ao obter dados de clima</h2>
                    </SectionStyled>                    
                )

                   
            }           
            <UlButtonStyled className="buttons">
                {
                    userLocals.length > 1 ?
                        userLocals.map((place) => (
                            <ButtonSecondary 
                                key={place._id} 
                                whenFiltering={handleSearch} 
                                item={place}
                                color={'red'}
                            >
                                {place}
                            </ButtonSecondary>
                        )): 
                        (
                            <>
                                <p>Nenhum dispositivo cadastrado!</p>
                                <Link to="/dispositivos">Cadastrar</Link>
                            </>
                            
                        )
                } 
            </UlButtonStyled>
            <SectionStyledGrid className="products">
                <UlStyled>
                    {
                        userDevices ? 
                            userDevices.map((device) => (
                                <CardUserDevice key={device._id} device={device} />
                            )): <Loading />
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
