import {
  GET_ALL,
  GET_DETAIL,
  GET_RECIPES_BY_NAME,
  FILTER_BY_VALUE,
  ORDER_BY_NAME,
  ORDER_BY_SCORE,
  GET_DIETS,
} from "./action";

const initialState = {
  recipes: [],
  totalrecipes: [],
  details: [],
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
    case ORDER_BY_NAME:
      let sortedArr =
        action.payload === "sort-a-z"
          ? state.recipes.sort(function (a, b) {
              if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
              else return -1;
            })
          : state.recipes.sort(function (a, b) {
              if (a.title.toLowerCase() > b.title.toLowerCase()) return -1;
              else return 1;
            });
      return {
        ...state,
        recipe: sortedArr,
      };
    case ORDER_BY_SCORE:
      let sortedAr =
        action.payload === "sort-health-up"
          ? state.recipes.sort(function (a, b) {
              if (a.healthScore > b.healthScore) return 1;
              else return -1;
            })
          : state.recipes.sort(function (a, b) {
              if (a.healthScore > b.healthScore) return -1;
              else return 1;
            });
      return {
        ...state,
        recipe: sortedAr,
      };
    case GET_DETAIL:
      return {
        ...state,
        details: action.payload,
      };
    case GET_DIETS:
      return {
        ...state,
        diets: action.payload,
      };
    default:
      return state;
  }
}
