import { ButtonStyled } from "./Button.styles"
import PropTypes from 'prop-types'

export const Button = ({name, background}) => {
    return(
        <ButtonStyled>{name}</ButtonStyled>        
    )
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    background: PropTypes.string
}

