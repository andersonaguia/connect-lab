import PropTypes from 'prop-types'
import { OverlayStyled, ModalStyled } from './Modal.styles'
import { Button } from '../AppButton/Button'

export const Modal = ({open, onClose, children}) => {
    if(!open){
        return null
    }

    return(
        <OverlayStyled>
            <ModalStyled>  
                {children}
                <Button onClick={onClose}>Cancelar</Button>
            </ModalStyled>
        </OverlayStyled>        
    )
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    open: PropTypes.bool,
    onClose: PropTypes.bool
}