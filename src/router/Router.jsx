import { Routes, Route } from "react-router-dom"
import { Login } from '../pages/Login/Login'
import { Cadastro } from '../pages/Cadastro/Cadastro'
import { Inicio } from "../pages/Inicio/Inicio"
import { Dispositivos } from '../pages/Dispositivos/Dispositivos'
import { Perfil } from "../pages/Perfil/Perfil"
import { Detalhes } from "../pages/Detalhes/Detalhes"
import { useAuthentication } from "../contexts/Authentication/useAuthentication"

export const Router = () => {
const { isAuthenticated } = useAuthentication()

  return(
    <Routes>
      {
        isAuthenticated ? (
          <>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/dispositivos" element={<Dispositivos />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/detalhes" element={<Detalhes />}/>           
          </>          
        ) :
        (
          <>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />            
          </>
        )
      }    
    </Routes>
  )    
};