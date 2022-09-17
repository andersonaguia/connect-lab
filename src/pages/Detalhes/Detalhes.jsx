import PropTypes from 'prop-types'
import { SectionStyled, ImgProdutoStyled, ImgStatusStyled, DivStyled } from './Detalhes.styles'
import {Button} from '../../components/AppButton/Button'

export const Detalhes = ({nome, urlImagem, estado}) => {
    return(
        <SectionStyled>
            <h3>Lâmpada Inteligente</h3>
            <p>Intelbras</p>
            <ImgProdutoStyled src={urlImagem} alt="foto do produto"></ImgProdutoStyled>
            <DivStyled>
                <p>Dispositivo Desligado</p>
                <ImgStatusStyled src={estado}></ImgStatusStyled>
            </DivStyled>
            <p><strong><u>Informações do Dispositivo</u></strong></p>           
            <p><strong>ID virtual: </strong>1234567891011212</p>
            <p><strong>Endereço IP: </strong>172.31.210.168</p>
            <p><strong>Endereço MAC: </strong>87:e3:34:ff:ed:34</p>
            <p><strong>Fuso Horário: </strong>América/São_Paulo</p>
            <p><strong>Força do Sinal: </strong>-70dBm</p>
            <Button name="Remover" />            
        </SectionStyled>        

    )
}

Detalhes.propTypes = {
    nome: PropTypes.string,
    urlImagem: PropTypes.string,
    estado: PropTypes.string
}