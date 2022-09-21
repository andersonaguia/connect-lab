import PropTypes from "prop-types";
import { useState } from "react";
import { AuthenticationContext } from "./AuthenticationContext";
import { userLogin } from "../../utils/userLogin";
import { toast } from 'react-toastify';

export const AuthenticationProvider = ({ children }) => {
  const [ userData, setUserData ] = useState(null)

  const handleLogin = (data) => {     
    console.log(userData)
    userLogin(data)
        .then((response) => {
            toast.success("Sucesso! Entrando no site")
            console.log("RESPONSE: ", response)
            sessionStorage.setItem('userData', JSON.stringify(response.data));              
            console.log("USER DATA: ", userData)  
            setUserData(response.data)
             
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
  };
  
  return (
    <AuthenticationContext.Provider
      value={{ isAuthenticated: userData, handleLogin, handleLogout }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

AuthenticationProvider.propTypes = {
  children: PropTypes.node,
};