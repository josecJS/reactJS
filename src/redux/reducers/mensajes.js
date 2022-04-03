import { ACTIONS_MENSAJES } from '../constantes';

const { VACIAR, BORRAR, CREAR, LEER } = ACTIONS_MENSAJES;

const initialState = {
  mensajes: []
};

export const mensajes = (state = initialState.mensajes, action) => {
  switch(action.type) {
    case BORRAR:
      state.splice(action.payload, 1);
      
      return [...state];
    case VACIAR:
      return [];
    case CREAR:
      state.push(action.payload);
      
      return [...state];
    case LEER:
      state[action.payload].leido = !state[action.payload].leido;
      
      return [...state];
    default:
      return [...state];
  }
}

export default mensajes;