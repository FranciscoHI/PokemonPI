import { GET_ALL_CHARACTER } from "../actions/index.js";

const initialState = {
  personajes: [],
 
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CHARACTER: 
      return {
        ...state,
        personajes: action.payload,
      };

        default:
      return state;
  }
};

export default rootReducer;
