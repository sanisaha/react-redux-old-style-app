import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

const Cart = () => {
    const cart = useSelector((state) => state.cart)
    return (
        <div>
            {cart.map(product => <ProductCard
                product={product}
            ></ProductCard>)}
        </div>
    )
};

export default Cart;