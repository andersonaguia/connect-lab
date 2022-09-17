import { MainStyles } from "./Main.styles";
import PropTypes from 'prop-types'

export const Main = ({ children }) => {
    return(
        <MainStyles>
            { children }
        </MainStyles>
    )
}

Main.propTypes = {
    children: PropTypes.node.isRequired
}