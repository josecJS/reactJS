import { ACTIONS_MENSAJES } from '../constantes';

const initialState = {
  productos: []
};

export const productos = (state = initialState.productos, action) => {
  switch(action.type) {
    case ACTIONS_MENSAJES.RECUPERAR_PRODUCTOS:
      return [...action.productos];
    default:
      return [...state];
  }
}

export default productos;