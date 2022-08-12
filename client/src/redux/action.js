import axios from "axios"

export const GET_ALL = "GET ALL"
export const RUTA_GET = "http://localhost:3001/recipes"

export function obtener(){
    return async function pedido(dispatch){
        let aux = await axios.get(RUTA_GET)
        return dispatch({
            type: GET_ALL,
            payload: aux.data
        })
    }
}