import { GET_ALL, GET_RECIPES_BY_NAME, FILTER_BY_VALUE } from "./action";

const initialState = {
  recipes: [],
  totalrecipes: [],
  details: {},
  diets: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        recipes: action.payload,
        totalrecipes: action.payload,
      };
    case GET_RECIPES_BY_NAME:
      return {
        ...state,
        recipes: action.payload,
      };
    case FILTER_BY_VALUE:
      const allRecipes = state.totalrecipes;
      const statusFiltered =
        action.payload === "All"
          ? allRecipes
          : allRecipes.filter((recipe) => {
              if (recipe.diets.length) {
                if (recipe.diets.find((d) => d.name === action.payload))
                  return recipe;
                if (recipe.diets.find((diet) => diet === action.payload))
                  return recipe;
              }
              return null;
            });
      return {
        ...state,
        recipes: statusFiltered,
      };
    default:
      return state;
  }
}
