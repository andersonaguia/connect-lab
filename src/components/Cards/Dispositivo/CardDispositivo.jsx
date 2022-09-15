import PropTypes from 'prop-types'
import { ShadowDivStyled, DivStyled, ImgProdutoStyled, ImgStatusStyled } from './CardDispositivo.styles'
import { H3Styled } from '../../Title'

export const CardDispositivos = ({ imagem, nome, local, agrupamento, estado }) => {
    return(
        <ShadowDivStyled>
            <ImgProdutoStyled src={imagem} alt="foto do produto"/>
            <DivStyled>
                <H3Styled>{ nome }</H3Styled> 
                <p>{local} | {agrupamento} | {estado}</p>
            </DivStyled>
            <ImgStatusStyled src={estado} alt="status do dispositivo" />                    
        </ShadowDivStyled>
    )
}

CardDispositivos.propTypes = {
    imagem: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    local: PropTypes.string.isRequired,
    agrupamento: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired
}