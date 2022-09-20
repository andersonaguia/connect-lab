import PropTypes from 'prop-types'
import { OverlayStyled, ModalStyled } from './Modal.styles'
export const Modal = ({open, onClose, children}) => {
    if(!open){
        return null
    }

    return(
        <OverlayStyled>
            <ModalStyled>
                <button onClick={onClose}>x</button>
            {   children}
            </ModalStyled>
        </OverlayStyled>        
    )
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    open: PropTypes.bool,
    onClose: PropTypes.bool
}