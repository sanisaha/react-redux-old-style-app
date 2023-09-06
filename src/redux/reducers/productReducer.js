import { actionTypes } from "../actionTypes/actionTypes";

const initialState = {
    cart: []
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: [...state.cart.filter(product => product.id !== action.payload)]
            }
        default:
            return state;
    }
}

export default productReducer;