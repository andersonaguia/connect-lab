import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { AuthenticationContext } from "./AuthenticationContext";
import { userLogin } from "../../utils/userLogin";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { checkWeather } from "../../utils/checkWeather";

export const AuthenticationProvider = ({ children }) => {
  const [ userData, setUserData ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(true)
  const [ weather, setWeather ] = useState(null)
  
  const navigate = useNavigate()

  const handleLogin = (data) => {     
    userLogin(data)
        .then((response) => {            
            console.log("RESPONSE: ", response)
            sessionStorage.setItem('userData', JSON.stringify(response.data)); 
            toast.success("Sucesso! Entrando no site")  
            setIsLoading(!isLoading)                 
        })
        .catch((error) => {
            console.error("Erro: ", error.code)
            toast.error("Email ou senha incorretos")
            setUserData(null)          
        })  
        toast.promise(userLogin, {
            pending: "Fazendo login"
        })              
  };

  const handleLogout = () => {
    setUserData(null)
    sessionStorage.removeItem('userData');
    navigate('/login')    
  }

  const handleWeather = (isAuthenticated) => {
    checkWeather(userData.user?.userAddress?.city)
      .then((response) => {   
        setWeather(response.data)
        })
      .catch((error) => {
        console.log(" Clima Erro:", error)
        setWeather(null)                
      })
  }

  useEffect(() => {
    setUserData(JSON.parse(sessionStorage.getItem('userData')))  
  }, [isLoading])

  return (
    <AuthenticationContext.Provider
      value={
        {
          isAuthenticated: userData, 
          hasWeather: weather, 
          handleLogin, 
          handleLogout, 
          handleWeather 
        }
      }
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

AuthenticationProvider.propTypes = {
  children: PropTypes.node,
};