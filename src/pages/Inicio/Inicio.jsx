import { CardDispositivos } from "../../components/Cards/CardDispositivo"
import { H2Styled, H3Styled} from "../../components/Title"
import { SectionStyled , DivStyled, SectionStyledGrid} from "./Inicio.styles"
import PropTypes from 'prop-types'

export const Inicio = ({imagem, nome}) => {
    return(
        <DivStyled>
       
        <SectionStyled>
            <H2Styled>16 ºC</H2Styled>
            <H3Styled>João Pessoa, PB</H3Styled>
            <p>Sencação Térmica: 15 ºC - Precipitação: 0mm - Probabilidade de chuva: 0%</p>
        </SectionStyled>
        <SectionStyledGrid>            
                <CardDispositivos imagem="teste" nome="Dispositivo 1" />            
                <CardDispositivos imagem="teste" nome="Dispositivo 2" />            
                <CardDispositivos imagem="teste" nome="Dispositivo 3" />            
                <CardDispositivos imagem="teste" nome="Dispositivo 4" />            
                <CardDispositivos imagem="teste" nome="Dispositivo 5" />            
                <CardDispositivos imagem="teste" nome="Dispositivo 6" />            
                <CardDispositivos imagem="teste" nome="Dispositivo 7" />            
                <CardDispositivos imagem="teste" nome="Dispositivo 8" />            
                <CardDispositivos imagem="teste" nome="Dispositivo 9" />            
                <CardDispositivos imagem="teste" nome="Dispositivo 1" />            
                <CardDispositivos imagem="teste" nome="Dispositivo 2" />            
                <CardDispositivos imagem="teste" nome="Dispositivo 3" />            
                <CardDispositivos imagem="teste" nome="Dispositivo 4" />            
                <CardDispositivos imagem="teste" nome="Dispositivo 5" />            
                <CardDispositivos imagem="teste" nome="Dispositivo 6" />            
                <CardDispositivos imagem="teste" nome="Dispositivo 7" />            
                <CardDispositivos imagem="teste" nome="Dispositivo 8" />            
                <CardDispositivos imagem="teste" nome="Dispositivo 9" />            
        </SectionStyledGrid>
       </DivStyled>
    )
}

Inicio.propTypes = {
    imagem: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
}
