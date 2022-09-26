import { LiStyled, DivStyled, DivButtonStyled, ImgStyled, ButtonStyled, H2Styled, DivModalStyled, UlStyled } from "./CardUserDevice.styles";
import { Modal } from "../../Modal/Modal";
import { useState } from "react";
import { Button } from "../../AppButton/Button";
import { useProducts } from "../../../contexts/Products/useProducts";
import { useAuthentication } from "../../../contexts/Authentication/useAuthentication";
import PropTypes from 'prop-types'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export const CardUserDevice = ({ device }) => {
    const[ isOpen, setIsOpen ] = useState(false)
    const { deleteUserDevice, handleUpdateDevice } = useProducts()
    const { isAuthenticated } = useAuthentication()

    const handleDelete = () => {
        deleteUserDevice(device._id)
        setIsOpen(false)
    }

    const handlePower = (deviceId, isOn) => {
        handleUpdateDevice(isAuthenticated.token, deviceId, !isOn)
    }

    return(
        <>
            <LiStyled >
                <ToastContainer autoClose={5000} theme="dark"/>
                <ImgStyled src={device.device.photoUrl} alt="foto do produto" />
                <DivStyled className="text">
                    <H2Styled>{device.device.name}</H2Styled>
                    <p>{device.local.description} | {device.room} | {device.is_on ? 'ON' : 'OFF'}</p>
                </DivStyled>
                <DivButtonStyled className="btn">                
                    <ButtonStyled onClick={()=>setIsOpen(true)}
                        image="../../../assets/images/info.png" 
                        className="info"
                    />
                    <ButtonStyled 
                        onClick={() => handlePower(device._id, device.is_on)}
                        image={ device.is_on ? "../../../../public/shutdown.png" : "../../../../public/powerOn.png" } 
                    />
                </DivButtonStyled>                
            </LiStyled>
            <Modal className='modal' open={isOpen} onClose={() => setIsOpen(false)}>
                <h2>{device.device.name}</h2>
                <h4>{device.device.madeBy}</h4>
                <ImgStyled src={device.device.photoUrl} alt="foto do produto" />
                <DivModalStyled>
                    <h3>{device.is_on ? 'Dispositivo Ligado' : 'Dispositivo Desligado'}</h3>
                    <ButtonStyled 
                        onClick={() => handlePower(device._id, device.is_on)}
                        image={ device.is_on ? "../../../../public/shutdown.png" : "../../../../public/powerOn.png" }
                    />
                </DivModalStyled>
                <UlStyled>
                    <h3>Informações do dispositivo</h3>
                    <li>
                        <p><strong>Tipo:</strong> {device.device.type}</p>
                    </li>
                    <li>
                        <p><strong>ID virtual:</strong> {device.device.info.virtual_id}</p>
                    </li>
                    <li>
                        <p><strong>Endereço IP:</strong> {device.device.info.ip_address}</p>
                    </li>
                    <li>
                        <p><strong>Endereço MAC:</strong> {device.device.info.mac_address}</p>
                    </li>                    
                    <li>
                        <p><strong>Força de Sinal:</strong> {device.device.info.signal}</p>
                    </li>
                </UlStyled>
                <Button className="btn" onClick={handleDelete}>Remover</Button>        
            </Modal> 
        </>     
    )
}

CardUserDevice.propTypes = {
    device: PropTypes.object.isRequired
}