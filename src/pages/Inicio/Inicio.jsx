import { CardDispositivos } from "../../components/Cards/Dispositivo/CardDispositivo"
import { H2Styled, H3Styled} from "../../components/Title"
import { SectionStyled , DivStyled, SectionStyledGrid} from "./Inicio.styles"
import PropTypes from 'prop-types'

export const Inicio = () => {
    return(
        <DivStyled>
       
        <SectionStyled>
            <H2Styled>16 ºC</H2Styled>
            <H3Styled>João Pessoa, PB</H3Styled>
            <p>Sencação Térmica: 15 ºC - Precipitação: 0mm - Probabilidade de chuva: 0%</p>
        </SectionStyled>
        <SectionStyledGrid>            
                <CardDispositivos imagem="teste" nome="Dispositivo 1" local="Casa" agrupamento="Quarto" estado="OFF"/>            
                <CardDispositivos imagem="teste" nome="Dispositivo 2" local="Casa" agrupamento="Quarto" estado="OFF"/>            
                <CardDispositivos imagem="teste" nome="Dispositivo 1" local="Casa" agrupamento="Quarto" estado="OFF"/>            
                <CardDispositivos imagem="teste" nome="Dispositivo 1" local="Casa" agrupamento="Quarto" estado="OFF"/>            
                <CardDispositivos imagem="teste" nome="Dispositivo 1" local="Casa" agrupamento="Quarto" estado="OFF"/>            
                <CardDispositivos imagem="teste" nome="Dispositivo 1" local="Casa" agrupamento="Quarto" estado="OFF"/>            
                <CardDispositivos imagem="teste" nome="Dispositivo 1" local="Casa" agrupamento="Quarto" estado="OFF"/>            
                <CardDispositivos imagem="teste" nome="Dispositivo 1" local="Casa" agrupamento="Quarto" estado="OFF"/>            
                <CardDispositivos imagem="teste" nome="Dispositivo 1" local="Casa" agrupamento="Quarto" estado="OFF"/>            
                <CardDispositivos imagem="teste" nome="Dispositivo 1" local="Casa" agrupamento="Quarto" estado="OFF"/>            
                <CardDispositivos imagem="teste" nome="Dispositivo 1" local="Casa" agrupamento="Quarto" estado="OFF"/>            
                <CardDispositivos imagem="teste" nome="Dispositivo 1" local="Casa" agrupamento="Quarto" estado="OFF"/>            
                <CardDispositivos imagem="teste" nome="Dispositivo 1" local="Casa" agrupamento="Quarto" estado="OFF"/>            
                <CardDispositivos imagem="teste" nome="Dispositivo 1" local="Casa" agrupamento="Quarto" estado="OFF"/>            
                <CardDispositivos imagem="teste" nome="Dispositivo 1" local="Casa" agrupamento="Quarto" estado="OFF"/>            
        </SectionStyledGrid>
       </DivStyled>
    )
}

Inicio.propTypes = {
    imagem: PropTypes.string,
    nome: PropTypes.string,
}
