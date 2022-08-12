import { GET_ALL } from './action'

const initialState = {
  recipes: [],
  details: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        recipes: action.payload,
      };
    default:
      return state;
  }
}