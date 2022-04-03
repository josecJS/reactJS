import { ACTIONS_MENSAJES } from '../constantes';

const { VACIAR, BORRAR, CREAR, LEER, RECUPERAR_PRODUCTOS } = ACTIONS_MENSAJES;

export const PRODUCTS_ACTIONS = {
  SET_PRODUCTS: 'SET_PRODUCTS',
  DELETE_PRODUCTS: 'DELETE_PRODUCTS',
  LOAD_PRODUCTS: 'LOAD_PRODUCTS'
}

export const loadProductsAction = () => {
  return {
    type: PRODUCTS_ACTIONS.LOAD_PRODUCTS
  }
}

export const borrarMensaje = (index) => {
  return {
    type: BORRAR,
    payload: index
  }
}

export const vaciarMensajes = () => {
  return {
    type: VACIAR
  }
}

export const crearMensaje = (msg) => {
  return {
    type: CREAR,
    payload: msg
  }
}

export const leerMensaje = (index) => {
  return {
    type: LEER,
    payload: index
  }
}

export const changeSession = (action) => {
  return {
    type: action
  };
}

export const recoverProducts = (productos) => {
  return {
    type: RECUPERAR_PRODUCTOS,
    productos
  };
}