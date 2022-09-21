import { ButtonStyled } from "./ButtonSecondary.styles";
import PropTypes from 'prop-types'

export const ButtonSecondary = ({children, whenFiltering, item}) => {
    return(
        <ButtonStyled onClick={()=>whenFiltering(item)}>
            {children}
        </ButtonStyled>
    )
}

ButtonSecondary.propTypes = {
    children: PropTypes.node.isRequired,
    whenFiltering: PropTypes.func.isRequired,
    item: PropTypes.string.isRequired
}