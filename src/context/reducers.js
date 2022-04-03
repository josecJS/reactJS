export const ADD_TAREA = 'ADD';
export const DELETE_TAREA = 'DELETE';

const initialState = [];

const reducerTareas = (state, action) => {
  switch (action.type) {
    case ADD_TAREA: return [...state, action.payload];
    case DELETE_TAREA: return [];
    default: return state;
  }
};

export { initialState, reducerTareas };