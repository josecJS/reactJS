import './Mensajes.view.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { borrarMensaje, vaciarMensajes, crearMensaje, leerMensaje } from '../redux/actions';
import MensajesHeader from '../components/MensajesHeader/MensajesHeader';
import MensajesTable from '../components/MensajesTable/MensajesTable';

export default function Mensajes() {
    const mensajes = useSelector(state => state);
    const dispatch = useDispatch();
      
    let crear = (asunto, email, mensaje) => {
        let nuevo = {
          asunto,
          email,
          mensaje,
          leido: false
        };
      
        dispatch(crearMensaje(nuevo));
      }

    let vaciar = () => { dispatch(vaciarMensajes()); }
    let eliminar = (index) => { dispatch(borrarMensaje(index)); }
    let leer = (index) => { dispatch(leerMensaje(index)) }
    
    return (
    <div className="Mensajes">
        <MensajesHeader clickNuevo={crear} clickEliminar={vaciar}>
        </MensajesHeader>
        
        <MensajesTable mensajes={mensajes.mensajes} clickEliminarUno={eliminar} clickMarcarLeido={leer}>
        </MensajesTable>
    </div>
    );
}