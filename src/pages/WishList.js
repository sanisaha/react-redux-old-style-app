import React from 'react';
import { useProducts } from '../context/ProductProvider';
import ProductCard from '../components/ProductCard';

const WishList = () => {
    const { state: { wishList, loading, error } } = useProducts();
    let content;
    if (loading) {
        return <p>Loading.....</p>
    }
    if (!loading && !error && wishList.length === 0) {
        return <p>Product list is empty</p>
    }
    if (!loading && !error && wishList.length) {
        return <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
            {
                wishList.map(product => <ProductCard product={product} key={product.id}></ProductCard>)
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

export default WishList;