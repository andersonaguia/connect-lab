import { ButtonStyled } from "./Button.styles"
import PropTypes from 'prop-types'

export const Button = ({children, onClick}) => {
    return(
        <ButtonStyled onClick={onClick}>{children}</ButtonStyled>        
    )
}

Button.propTypes = {
   children: PropTypes.node.isRequired,
   onClick: PropTypes.func 
}

