import PropTypes from 'prop-types'
import { LiStyled, ImgProdutoStyled } from './CardDispositivo.styles'
import { H3Styled } from '../../Title'
import { Button } from '../../../components/AppButton/Button'

export const CardDispositivo = ({ product }) => {
    return(
        <LiStyled>
            <ImgProdutoStyled src={product.photoUrl} alt="foto do produto"/>
            <H3Styled>{ product.name }</H3Styled> 
            <Button onClick={()=> console.log(product)}>Adicionar</Button>        
        </LiStyled>
    )
}

CardDispositivo.propTypes = {
    product: PropTypes.object.isRequired
}