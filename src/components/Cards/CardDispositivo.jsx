import PropTypes from 'prop-types'
import { ImgStyled } from '../Img/Img'
import { ShadowDivStyled } from '../Div'
import { H3Styled } from '../Title'

export const CardDispositivos = ({ imagem, nome }) => {
    return(
        <ShadowDivStyled>
            <ImgStyled src={imagem} />
            <H3Styled>{ nome }</H3Styled>            
        </ShadowDivStyled>
    )
}

CardDispositivos.propTypes = {
    imagem: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired
}