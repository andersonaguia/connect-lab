import PropTypes from 'prop-types'
import { LiStyled, ImgProdutoStyled, FormStyled, SelectStyled, InputStyled } from './CardDispositivo.styles'
import { H3Styled } from '../../Title'
import { Button } from '../../../components/AppButton/Button'
import { useState } from 'react'
import { Modal } from '../../Modal/Modal'
import { useForm } from "react-hook-form";
import { useAuthentication } from '../../../contexts/Authentication/useAuthentication'
// import { addDevice } from '../../../utils/addDevice'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useProducts } from '../../../contexts/Products/useProducts'

const schema = yup.object({
    place: yup.string().required('Obrigatório informar o local'),
    local: yup.string().required('Obrigatório informar o cômodo')          
  }).required();

export const CardDispositivo = ({ product, locals }) => {      
    const[ isOpen, setIsOpen ] = useState(false)
    const { handleAddDevice } = useProducts()
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    }); 
    const { isAuthenticated } = useAuthentication() 

    const onSubmit = (data) => {              
        const body = {
            user: isAuthenticated.user._id,
            device: product._id,
            is_on: true,
            local: data.place,
            room: data.local
        }
        handleAddDevice(isAuthenticated.token, body)       
    }

    return(
        <>
            <LiStyled>
                <ImgProdutoStyled src={product.photoUrl} alt="foto do produto"/>
                <H3Styled>{ product.name }</H3Styled> 
                <Button onClick={()=> setIsOpen(true)}>Adicionar</Button>            
            </LiStyled>            
            <Modal className='modal' open={isOpen} onClose={() => setIsOpen(false)}>
                <ToastContainer theme="dark"/>
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
                    <span hidden={true}>{toast.error(errors.place?.message)}</span>
                    <label htmlFor='local'>Cômodo*</label>
                    <InputStyled type='text' id='local' placeholder='Digite o nome do cômodo' {...register('local')}/>
                    <span hidden={true}>{toast.error(errors.local?.message)}</span>
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