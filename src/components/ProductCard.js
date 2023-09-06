import React from "react";
import { BiListPlus, BiX } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { actionTypes } from "../redux/actionTypes/actionTypes";
import { add_to_cart } from "../redux/actionCreator/actionCreator";

const ProductCard = ({ product, button_prop }) => {
    const dispatch = useDispatch();
    return (
        <div
            className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900'
            key={product.id}
        >
            <div className='h-52 w-52 mx-auto'>
                <img src={product.image} alt={product.title} />
            </div>
            <h1 className='font-bold text-center'>{product.title}</h1>
            <p className='text-center font-semibold mb-3'>Rating: {product.rating.rate}</p>
            <div className=' flex-1'>
                <ul className='space-y-2'>
                    {product.keyFeature.map((feature) => {
                        return <li key={feature} className='text-sm '>{feature}</li>;
                    })}
                </ul>
            </div>
            <div className='flex gap-2 mt-5'>
                {!button_prop && <>
                    <button
                        className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
                        onClick={() => dispatch(add_to_cart())}

                    >
                        Add to cart
                    </button>
                    <button
                        title='Add to wishlist'
                        className='bg-indigo-500  py-1 px-2 rounded-full'

                    >
                        <BiListPlus className='text-white' />
                    </button>
                </>
                }

                {
                    button_prop && <button
                        title='Remove from wishlist'
                        className='bg-indigo-500  py-1 px-2 rounded-full'

                    >
                        <BiX className='text-white' />

                    </button>
                }
            </div>
        </div>
    );
};

export default ProductCard;