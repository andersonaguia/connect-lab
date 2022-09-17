import { DivStyled, CardStyled, ImgStyled, FormStyled, InputStyled } from "./Dispositivos.styles"
import { Button } from '../../components/AppButton/Button' 
export const Dispositivos = () => {
    return(
        <section>
            <FormStyled onSubmit={()=> console.log("Clicou")}>
                <InputStyled type="text" placeholder="Digite o nome do dispositivo"/>
                <Button type="submit" name="Buscar" />
            </FormStyled>
            <DivStyled>
                <CardStyled>                
                    <ImgStyled src="img" alt="imagem do produto" />
                    <h3>Sensor de Temperatura</h3>
                    <Button name="Adicionar"></Button>               
                </CardStyled>            
                <CardStyled>                
                    <ImgStyled src="img" alt="imagem do produto" />
                    <h3>Sensor de Temperatura</h3>
                    <Button name="Adicionar"></Button>               
                </CardStyled>            
                <CardStyled>                
                    <ImgStyled src="img" alt="imagem do produto" />
                    <h3>Sensor de Temperatura</h3>
                    <Button name="Adicionar"></Button>               
                </CardStyled>            
                <CardStyled>                
                    <ImgStyled src="img" alt="imagem do produto" />
                    <h3>Sensor de Temperatura</h3>
                    <Button name="Adicionar"></Button>               
                </CardStyled>            
                <CardStyled>                
                    <ImgStyled src="img" alt="imagem do produto" />
                    <h3>Sensor de Temperatura</h3>
                    <Button name="Adicionar"></Button>               
                </CardStyled>            
                <CardStyled>                
                    <ImgStyled src="img" alt="imagem do produto" />
                    <h3>Sensor de Temperatura</h3>
                    <Button name="Adicionar"></Button>               
                </CardStyled>            
                <CardStyled>                
                    <ImgStyled src="img" alt="imagem do produto" />
                    <h3>Sensor de Temperatura</h3>
                    <Button name="Adicionar"></Button>               
                </CardStyled>            
                <CardStyled>                
                    <ImgStyled src="img" alt="imagem do produto" />
                    <h3>Sensor de Temperatura</h3>
                    <Button name="Adicionar"></Button>               
                </CardStyled>            
                <CardStyled>                
                    <ImgStyled src="img" alt="imagem do produto" />
                    <h3>Sensor de Temperatura</h3>
                    <Button name="Adicionar"></Button>               
                </CardStyled>            
                <CardStyled>                
                    <ImgStyled src="img" alt="imagem do produto" />
                    <h3>Sensor de Temperatura</h3>
                    <Button name="Adicionar"></Button>               
                </CardStyled>            
                <CardStyled>                
                    <ImgStyled src="img" alt="imagem do produto" />
                    <h3>Sensor de Temperatura</h3>
                    <Button name="Adicionar"></Button>               
                </CardStyled>            
                <CardStyled>                
                    <ImgStyled src="img" alt="imagem do produto" />
                    <h3>Sensor de Temperatura</h3>
                    <Button name="Adicionar"></Button>               
                </CardStyled>            
            </DivStyled>           
        </section>
    )
}