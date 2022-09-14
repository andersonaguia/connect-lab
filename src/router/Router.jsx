import { Routes, Route } from "react-router-dom"
import { Login } from '../pages/Login'
import { Cadastro } from '../pages/Cadastro'
import { Inicio } from "../pages/Inicio/Inicio"
import { Dispositivos } from '../pages/Dispositivos'
import { Perfil } from "../pages/Perfil/Perfil"

export const Router = () => {
  return(
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/dispositivos" element={<Dispositivos />} />
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  )    
};