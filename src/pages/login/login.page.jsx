import React, { useRef, useState } from 'react';
import './login.page.css';
import { validations } from '../../utils/validations';
import { useDispatch } from 'react-redux';
import { changeSession } from '../../redux/actions';
import { ACTIONS_LOGIN } from '../../redux/constantes';

const { email, minLength } = validations;

export default function Login(props) {
    const miStorage = window.localStorage;
    const okState = 2;
    const koState = 1;
    const initState = 0;
    const textUser = useRef();
    const textPass = useRef();
    const [user, setUser] = useState(initState);
    const [pass, setPass] = useState(initState);
    const [action, setAction] = useState(true);
    const dispatch = useDispatch();
    let acceder = (event) => {
        event.preventDefault();
        const access = user === okState && pass === okState && miStorage.getItem(textUser.current.value) === textPass.current.value;

        if (access){
            textUser.current.value = textPass.current.value = '';
            setUser(initState);
            setPass(initState);
            dispatch(changeSession(ACTIONS_LOGIN.LOGIN));
            props.history.push ({
                pathname: '/store'
              });
        }
    };
    let validateEmail = (event) => {
        event.preventDefault();
        setUser(email(textUser.current.value) ? okState : koState);
    };
    let validateLength = (event) => {
        event.preventDefault();
        setPass(minLength(textPass.current.value, 5) ? okState : koState);
    };
    let register = (event) => {
        event.preventDefault();
        const isValidRegister = user === okState && pass === okState;
        
        isValidRegister && !miStorage.getItem(textUser.current.value) && miStorage.setItem(textUser.current.value, textPass.current.value);
        setAction(true);
    };
    let changeAction = (event) => {
        event.preventDefault();
        setAction(event.currentTarget.id === 'pills-home-tab');
    };

    return (
        <div className="d-flex justify-content-center align-items-center mt-5">
            <div className="card">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item text-center">
                        <a onClick={changeAction} className={`nav-link btl ${action ? 'active' : ''}`} id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Login</a>
                    </li>
                    <li className="nav-item text-center">
                        <a onClick={changeAction} className={`nav-link btl ${!action ? 'active' : ''}`} id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Signup</a>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className={`tab-pane fade ${action ? 'show active' : ''}`} id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="form px-4 pt-5">
                            <input type="text" name="" className="form-control" placeholder="Email"/>
                            <input type="password" name="" className="form-control" placeholder="Password"/>
                            <button className="btn btn-dark btn-block" onClick={acceder}>Login</button>
                        </div>
                    </div>
                    <div className={`tab-pane fade ${!action ? 'show active' : ''}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div className="form px-4 pt-5">
                            <input type="text" name="" className="form-control" placeholder="Email" onChange={validateEmail} ref={textUser}/>
                            <input type="password" name="" className="form-control" placeholder="Password" onChange={validateLength} ref={textPass}/>
                            <button className="btn btn-dark btn-block" onClick={register}>Signup</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }