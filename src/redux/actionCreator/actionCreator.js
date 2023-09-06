import { actionTypes } from "../actionTypes/actionTypes"

export const add_to_cart = (data) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: data
    }
}
export const remove_from_cart = (data) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: data
    }
}