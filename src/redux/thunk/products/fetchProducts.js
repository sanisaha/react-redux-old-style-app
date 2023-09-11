import { loadProduct } from "../../actionCreator/actionCreator";

const loadProducts = () => {
    return async (dispatch, getState) => {
        const res = await fetch('products.json');
        const data = await res.json();
        if (data.length) {
            dispatch(loadProduct(data))
        }
    }
}

export default loadProducts;