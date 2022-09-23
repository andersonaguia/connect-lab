import PropTypes from 'prop-types'
import { LiStyled, ImgProdutoStyled, FormStyled, SelectStyled, InputStyled } from './CardDispositivo.styles'
import { H3Styled } from '../../Title'
import { Button } from '../../../components/AppButton/Button'
import { useState } from 'react'
import { Modal } from '../../Modal/Modal'
import { useForm } from "react-hook-form";
import { useAuthentication } from '../../../contexts/Authentication/useAuthentication'
import { addDevice } from '../../../utils/addDevice'

export const CardDispositivo = ({ product, locals }) => {      
    const[ isOpen, setIsOpen ] = useState(false)
    const { register, handleSubmit } = useForm() 
    const { isAuthenticated } = useAuthentication() 

    const onSubmit = (data) => {              
        const body = {
            user: isAuthenticated.user._id,
            device: product._id,
            is_on: true,
            local: data.place,
            room: data.local
        }       
        addDevice(isAuthenticated.token, body)        
            .then((response) => {
                if(response){
                    setTimeout(alert("Pareado com sucesso"), 3000)
                }
                setIsOpen(false)                
            })
            .catch((error) => {
                console.log("ERRO: ", error)
            })
    }

    return(
        <>
            <LiStyled>
                <ImgProdutoStyled src={product.photoUrl} alt="foto do produto"/>
                <H3Styled>{ product.name }</H3Styled> 
                <Button onClick={()=> setIsOpen(true)}>Adicionar</Button>            
            </LiStyled>            
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <h2>{product.name}</h2>
                <FormStyled onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor='place'>Local*</label>
                    <SelectStyled name='place' id='place' placeholder='Selecione o local' {...register('place')}>
                        {
                            locals && locals.map((place) => (
                                <option  key={place._id} value={place._id}>{place.description}</option>
                            )) 
                        }
                    </SelectStyled>
                    <label htmlFor='local'>Cômodo*</label>
                    <InputStyled type='text' id='local' placeholder='Digite o nome do cômodo' {...register('local')}/>
                    <Button type='submit'>Confirmar</Button>
                </FormStyled>                
            </Modal>                           
        </>        
    )
}

CardDispositivo.propTypes = {
    product: PropTypes.object.isRequired,
    locals: PropTypes.array
}