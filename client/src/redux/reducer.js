import { GET_ALL, GET_RECIPES_BY_NAME } from './action'

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
    case GET_RECIPES_BY_NAME:
      return{
        ...state,
        recipes: action.payload,
      }
    default:
      return state;
  }
}