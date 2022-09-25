import { ButtonStyled } from "./ButtonSecondary.styles";
import PropTypes from 'prop-types'
import { useEffect, useState } from "react";

export const ButtonSecondary = ({children, whenFiltering, item, color}) => {
    const [isSelected, setIsSelected ] = useState(null)

    const handleClick = () => {
        whenFiltering(item)
        setIsSelected(color)
             
    }

    useEffect(() => {
        console.log(color)
    }, [isSelected])
    
    return(
        <ButtonStyled onClick={handleClick} color={color}>
            {children}
        </ButtonStyled>
    )
}

ButtonSecondary.propTypes = {
    children: PropTypes.node.isRequired,
    whenFiltering: PropTypes.func.isRequired,
    item: PropTypes.string.isRequired,
    color: PropTypes.string
}