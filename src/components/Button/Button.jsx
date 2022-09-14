import { ButtonStyled } from "./Button.styles"
import PropTypes from 'prop-types'
import { light } from "../Themes";

export const Button = ({name, background}) => {
    const {colors} = light
    return(
        <ButtonStyled background={colors.primary.default}>{name}</ButtonStyled>        
    )
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    background: PropTypes.string
}

