import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useSelector } from 'react-redux';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            {products.map(product => <ProductCard
                product={product}
                key={product.id}
            ></ProductCard>)}
        </div>
    );
};

export default Home;