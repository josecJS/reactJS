import { combineReducers } from 'redux'
import login from './login'
import mensajes from './mensajes';
import productos from './productos';

export default combineReducers({
  login,
  mensajes,
  productos
});