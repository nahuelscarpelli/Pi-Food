import axios from "axios"

export const GET_ALL = "GET ALL"
export const RUTA_GET = "http://localhost:3001/recipes"
export const GET_RECIPES_BY_NAME = 'GET_RECIPES_BY_NAME';

// LLAMANDO TODO
export function getAll(){
    return async function pedido(dispatch){
        let aux = await axios.get(RUTA_GET)
        return dispatch({
            type: GET_ALL,
            payload: aux.data
        })
    }
}

// LLAMANDO POR NOMBRE (SEARCH)
export function getRecipesByName(nameRecipe) {
	return async function (dispatch){
		let response = await axios.get(`http://localhost:3001/recipes?name=${nameRecipe}`);
		return dispatch({ type: GET_RECIPES_BY_NAME, payload: response.data });
		};
	};
