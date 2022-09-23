import { GET_ALL_CHARACTER, GET_CHARACTER_ID } from "../actions/index.js";

const initialState = {
  personajes: [],
  personaje: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CHARACTER:
      return {
        ...state,
        personajes: action.payload,
      };

    case GET_CHARACTER_ID:
      return {
        ...state,
        personaje: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
