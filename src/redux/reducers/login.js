import { ACTIONS_LOGIN } from '../constantes';

const initialState = {
  isLogin: false
};

export const login = (state = initialState.isLogin, action) => {
  switch(action.type) {
    case ACTIONS_LOGIN.LOGIN:
      state = true;
      return Boolean(state);
    case ACTIONS_LOGIN.LOGOUT:
      state = false;
      return Boolean(state);
    default:
      return Boolean(state);
  }
}

export default login;