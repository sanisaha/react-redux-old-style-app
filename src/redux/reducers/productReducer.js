import { actionTypes } from "../actionTypes/actionTypes";

const initialState = {
    cart: []
};

const productReducer = (state = initialState, action) => {
    const selectedProducts = state.cart.find(product => product.id === action.payload.id);
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            if (selectedProducts) {
                const newCart = state.cart.filter(product => product.id !== selectedProducts.id)
                selectedProducts.quantity = selectedProducts.quantity + 1;
                return {
                    ...state,
                    cart: [...newCart, selectedProducts]
                }
            }
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }]
            }
        case actionTypes.REMOVE_FROM_CART:
            if (selectedProducts.quantity > 1) {
                const newCart = state.cart.filter(product => product.id !== selectedProducts.id)
                selectedProducts.quantity = selectedProducts.quantity - 1;
                return {
                    ...state,
                    cart: [...newCart, selectedProducts]
                }
            }
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload.id)
            }
        default:
            return state;
    }
}

export default productReducer;