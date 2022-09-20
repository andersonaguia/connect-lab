import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { ProductsContext } from "./ProductsContext";
import { useAuthentication } from "../Authentication/useAuthentication";
import { findLocals } from "../../utils/findLocals";

export const ProductsProvider = ({ children }) => {
    const { isAuthenticated } = useAuthentication()
    const [ locals, setLocals ] = useState(null)

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
    };

    useEffect(() => {
        handleLocals()        
    }, [isAuthenticated])

    return (
        <ProductsContext.Provider value={{ allPlaces: locals , handleLocals}}>
           {children}
        </ProductsContext.Provider>
    )
}

ProductsProvider.propTypes = {
  children: PropTypes.node,
}