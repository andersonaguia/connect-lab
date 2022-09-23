import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { ProductsContext } from "./ProductsContext";
import { useAuthentication } from "../Authentication/useAuthentication";
import { findLocals } from "../../utils/findLocals";
import { deleteDevice } from "../../utils/deleteDevice";
import { useNavigate } from "react-router-dom";

export const ProductsProvider = ({ children }) => {
    const { isAuthenticated } = useAuthentication()
    const [ locals, setLocals ] = useState(null)
    const [statusDevice, setStatusDevice ] = useState()
    const navigate = useNavigate()

    const handleLocals = () => {
        if(isAuthenticated){
            findLocals(isAuthenticated.token)
            .then((response) => {
                setLocals(response.data)
             })
            .catch((error) => {
                console.log(error)
            }) 
        }       
    }

    const deleteUserDevice = (token, id) => {
        deleteDevice(token, id)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleStatusDevice = () => {
        setStatusDevice(!statusDevice)
        console.log("Status Device: ", statusDevice)
        navigate('/inicio')
    }

    useEffect(() => {
        handleLocals()      
    }, [isAuthenticated])

    return (
        <ProductsContext.Provider 
        value={
            { 
                allPlaces: locals,
                deviceStatus: statusDevice,
                handleLocals, 
                deleteUserDevice,
                handleStatusDevice
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