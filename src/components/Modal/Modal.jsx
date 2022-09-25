import PropTypes from 'prop-types'
import { OverlayStyled, ModalStyled, ModalButtonStyled, DivStyled} from './Modal.styles'


export const Modal = ({open, onClose, children}) => {
    if(!open){
        return null
    }

    return(
        <OverlayStyled>
            <ModalStyled> 
                <DivStyled>
                    <ModalButtonStyled onClick={onClose}>&times;</ModalButtonStyled>
                </DivStyled>                               
                {children}                
            </ModalStyled>
        </OverlayStyled>        
    )
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    open: PropTypes.bool,
    onClose: PropTypes.bool
}