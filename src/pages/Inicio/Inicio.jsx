import { H2Styled, H3Styled} from "../../components/Title"
import { SectionStyled , DivStyled, SectionStyledGrid, UlStyled, UlButtonStyled } from "./Inicio.styles"
import PropTypes from 'prop-types'
import { useAuthentication } from "../../contexts/Authentication/useAuthentication";
import { useState, useEffect } from "react";
import { CardUserDevice } from "../../components/Cards/UserDevice/CardUserDevice";
import { ButtonSecondary } from "../../components/AppButton/Secondary/ButtonSecondary";
import { useProducts } from "../../contexts/Products/useProducts";
import { Loading } from "../../components/Loading/Loading";
import { Link } from "react-router-dom";

export const Inicio = () => {
    const { isAuthenticated, handleWeather, hasWeather } = useAuthentication();
    const { deviceStatus, allUserDevices, local, handleLocals, buttonSelected, handleUserDevices, handleSearch } = useProducts()
    const [ isLoading, setIsLoading ] = useState(true)
    const [ userLocals, setUserLocals ] = useState(['Todos'])   
    
    useEffect(() => {            
            if(isAuthenticated){ 
                handleWeather()                                                             
            }            
    }, [deviceStatus, isLoading])
    
    useEffect(() => {
        handleUserDevices()
        setIsLoading(false)
    }, [deviceStatus])
    
    useEffect(() => {
        setUserLocals(['Todos'])
        setUserLocals((locals => [...locals, ...new Set(allUserDevices?.map((device) => device.local.description))]))
    }, [local, buttonSelected])

    useEffect(() => {
        handleLocals()
    }, [isLoading])
    console.log("USER DEVICES: ", allUserDevices)
    console.log("USER LOCALS: ", userLocals)
      
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
                        <h2>Tentando obter dados do clima...</h2>
                    </SectionStyled>                    
                )

                   
            }           
            <UlButtonStyled className="buttons">
                {
                    userLocals.length > 1 ?
                    userLocals?.map((place) => (
                            <ButtonSecondary 
                                key={place._id} 
                                whenFiltering={handleSearch} 
                                item={place}
                                color={'red'}
                            >
                                {place}
                            </ButtonSecondary>
                        )): isLoading === false && (
                                <>
                                    <p>Nenhum dispositivo cadastrado!</p>
                                    <Link onClick={handleLocals} to="/dispositivos">Cadastrar</Link>
                                </>                            
                            )
                } 
            </UlButtonStyled>
            <SectionStyledGrid className="products">
                <UlStyled>
                    {
                        allUserDevices ? 
                            allUserDevices.map((device) => (
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
