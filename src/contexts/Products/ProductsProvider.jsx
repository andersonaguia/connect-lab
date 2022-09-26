import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { ProductsContext } from "./ProductsContext";
import { useAuthentication } from "../Authentication/useAuthentication";
import { findLocals } from "../../services/findLocals";
import { findUserDevices } from "../../services/findUserDevices";
import { deleteDevice } from "../../services/deleteDevice";
import { useNavigate } from "react-router-dom";
import { updateDeviceStatus } from "../../services/updateDeviceStatus";
import { addDevice } from '../../services/addDevice'
import { toast } from 'react-toastify';

export const ProductsProvider = ({ children }) => {
    const { isAuthenticated } = useAuthentication()
    const [ locals, setLocals ] = useState(null)
    const [ statusDevice, setStatusDevice ] = useState(false)
    const [ userDevices, setUserDevices ] = useState(null)
    const [ hasLocal, setHasLocal ] = useState(false)
    const [ search, setSearch ] = useState(null)
    const [ control, setControl ] = useState(true)   

    const navigate = useNavigate()

    const handleSearch = (device) => {
        console.log(device)
        setStatusDevice(() => !statusDevice)
        setSearch(() => device)
        setControl(() => false)
    }

    const handleLocals = () => {
        if(isAuthenticated){
            findLocals(isAuthenticated?.token)
            .then((response) => {
                setLocals(response.data)
             })
            .catch((error) => {
                console.log(error)
            }) 
        }       
    }

    const handleUserDevices = () => {        
        findUserDevices(isAuthenticated?.token, isAuthenticated?.user?._id)
            .then((response) => {
                if(search != null){
                    search === 'Todos' ? setUserDevices(response.data) : setUserDevices(response.data.filter((device) => device.local.description === search))
                    if(control){
                        setSearch(null)
                    }                    
                }else{
                    setUserDevices(response.data)
                }

                setTimeout(() => {
                    search === null && setHasLocal(!hasLocal)                                            
                }, 1000); 

            })
            .catch((error) => {
                console.log(error)
            })     
    }

    const deleteUserDevice = (id) => {
        deleteDevice(isAuthenticated?.token, id)
            .then((response) => {
                toast.success("Dispositivo excluído com sucesso!")                 
                setTimeout(() => {
                    setStatusDevice(!statusDevice)                           
                }, 1000);
                
            })
            .catch((error) => {
                console.log(error)
                toast.error("Falha ao excluir o dispositivo! Tente novamente.")
            })
            toast.promise(deleteDevice, {
                pending: "Excluindo o dispositivo..."
            })
    }

    const handleStatusDevice = () => {
        setStatusDevice(!statusDevice)
        navigate('/inicio')
    }

    const handleUpdateDevice = (token, id, isOn) => {         
        updateDeviceStatus(token, id, isOn)
            .then((response) => {
                toast.success("Estado atualizado com sucesso!")  
                setTimeout(() => {
                    setStatusDevice(!statusDevice)
                }, 1000);                         
            })
            .catch((error) => {
                console.log(error)
                toast.error("Falha ao atualizar o status do dispositivo! Tente novamente.")
            })
            toast.promise(updateDeviceStatus, {
                pending: "Alterando estado do dispositivo"
            })
    }

    const handleAddDevice = (token, body) => { 
        setSearch(null)
        addDevice(token, body)        
            .then((response) => {
                toast.success("Dispositivo vinculado com sucesso!")                                        
            })
            .catch((error) => {
                console.log("ERRO: ", error)
                toast.error("Falha ao vincular o dispositivo! Tente novamente.")
            })
            toast.promise(addDevice, {
                pending: "Vinculando dispositivo..."
            })        
    }

    useEffect(() => {
        handleLocals()            
    }, [statusDevice])

    useEffect(() => {
        handleLocals()            
    }, [])

    useEffect(() => {        
        handleUserDevices()            
    }, [statusDevice])    

    useEffect(() => {
        handleUserDevices()            
    }, [])

    return (
        <ProductsContext.Provider 
        value={
            { 
                allPlaces: locals,
                deviceStatus: statusDevice,
                allUserDevices: userDevices,
                local: hasLocal,
                handleLocals, 
                deleteUserDevice,
                handleStatusDevice,
                handleUpdateDevice,
                handleAddDevice,
                handleUserDevices,
                handleSearch
            }
        }
        >
           {children}
        </ProductsContext.Provider>
    )
}

ProductsProvider.propTypes = {
  children: PropTypes.node,
}