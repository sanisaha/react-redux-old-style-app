import { actionTypes } from "../actionTypes/actionTypes"

export const loadProduct = (data) => {
    return {
        type: actionTypes.LOAD_PRODUCT,
        payload: data
    }
}
export const addProduct = (data) => {
    return {
        type: actionTypes.ADD_PRODUCT,
        payload: data
    }
}

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