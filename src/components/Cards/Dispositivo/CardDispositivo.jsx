import PropTypes from 'prop-types'
import { LiStyled, ImgProdutoStyled, FormStyled } from './CardDispositivo.styles'
import { H3Styled } from '../../Title'
import { Button } from '../../../components/AppButton/Button'
import { useState } from 'react'
import { Modal } from '../../Modal/Modal'
import { useForm } from "react-hook-form";

export const CardDispositivo = ({ product, locals }) => {      
    const[ isOpen, setIsOpen ] = useState(false)
    const { register, handleSubmit } = useForm()  
    const onSubmit = (data) => {
        console.log(data)
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
                    <select name='place' id='place' placeholder='Selecione o local' {...register('place')}>
                        {
                            locals && locals.map((place) => (
                                <option  key={place._id} value={place.description}>{place.description}</option>
                            )) 
                        }
                    </select>
                    <label htmlFor='local'>Cômodo*</label>
                    <input type='text' id='local' placeholder='Digite o nome do cômodo' {...register('local')}/>
                    <Button type='submit'>Adicionar</Button>
                </FormStyled>                
            </Modal>                           
        </>        
    )
}

CardDispositivo.propTypes = {
    product: PropTypes.object.isRequired,
    locals: PropTypes.array
}