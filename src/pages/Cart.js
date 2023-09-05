import React from 'react';
import { useProducts } from '../context/ProductProvider';
import ProductCard from '../components/ProductCard';

const Cart = () => {
    const { state: { cart, loading, error } } = useProducts();
    let content;
    if (loading) {
        return <p>Loading.....</p>
    }
    if (!loading && !error && cart.length === 0) {
        return <p>Product list is empty</p>
    }
    if (!loading && !error && cart.length) {
        return <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
            {
                cart.map(product => <ProductCard product={product} key={product.id} button_prop='button_prop'></ProductCard>)
            }
        </div>
    }
    if (error) {
        return <p className=' text-red-600'>Something went wrong</p>
    }
    return (
        <div>
            {content}
        </div>
    );
};

export default Cart;