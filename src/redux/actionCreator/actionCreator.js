import { actionTypes } from "../actionTypes/actionTypes"

export const add_to_cart = (data) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: data
    }
}