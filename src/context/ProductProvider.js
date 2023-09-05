import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { initialState, productReducer } from '../state/productState/productReducer';
import { actionTypes } from '../state/productState/actiontypes';
const PRODUCT_CONTEXT = createContext();
const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, initialState);
    useEffect(() => {
        dispatch({ type: actionTypes.fetching_start });
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) =>
                dispatch({ type: actionTypes.fetching_success, payload: data })
            )
            .catch(() => {
                dispatch({ type: actionTypes.fetching_error });
            });
    }, []);

    const value = {
        state,
        dispatch
    }


    return (
        <PRODUCT_CONTEXT.Provider value={value}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    );

};

export const useProducts = () => {
    const context = useContext(PRODUCT_CONTEXT);

    return context;
};

export default ProductProvider;