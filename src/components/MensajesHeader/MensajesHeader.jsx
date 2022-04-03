import './MensajesHeader.css';
import React, { useRef, useState } from 'react';
import { validations } from '../../utils/validations';

const { isEmpty, email, minLength } = validations;

export default function MensajesHeader(props) {
    const okState = 2;
    const koState = 1;
    const initState = 0;
    const textOne = useRef();
    const textTwo = useRef();
    const textThree = useRef();
    const [one, setOne] = useState(initState);
    const [two, setTwo] = useState(initState);
    const [three, setThree] = useState(initState);

    let manejarEnvio = (event) => {
        event.preventDefault();
        const sendNew = one === okState && two === okState && three === okState;

        if (sendNew){
            props.clickNuevo(textOne.current.value, textTwo.current.value, textThree.current.value);
            textOne.current.value = textTwo.current.value = textThree.current.value = '';
            setOne(initState);
            setTwo(initState);
            setThree(initState);
        }
    };

    let validateNoEmpty = (event) => {
        event.preventDefault();
        setOne(!isEmpty(textOne.current.value) ? okState : koState);
    };

    let validateEmail = (event) => {
        event.preventDefault();
        setTwo(email(textTwo.current.value) ? okState : koState);
    };

    let validateLength = (event) => {
        event.preventDefault();
        setThree(minLength(textThree.current.value, 10) ? okState : koState);
    };

    return (
        <div className="MensajesHeader">
            <form onSubmit={manejarEnvio}>
                <input className={one === koState ? 'error' : ''} type="text" onChange={validateNoEmpty} ref={textOne}/>
                <input className={two === koState ? 'error' : ''} type="text" onChange={validateEmail} ref={textTwo}/>
                <input className={three === koState ? 'error' : ''} type="text" onChange={validateLength} ref={textThree}/>
                <button type="submit" className="Nuevo">Nuevo</button>
                <button onClick={props.clickEliminar} className="Vaciar">Vaciar</button>
                <div className="MensajesHeaderError">
                    {one === koState && <p>Error one</p>}
                    {two === koState && <p>Error two</p>}
                    {three === koState && <p>Error three</p>}
                </div>
            </form>

        </div> 
    );
}