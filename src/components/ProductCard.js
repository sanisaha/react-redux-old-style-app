import React from "react";
import { BiListPlus, BiX } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { actionTypes } from "../redux/actionTypes/actionTypes";
import { add_to_cart, remove_from_cart } from "../redux/actionCreator/actionCreator";
import { useLocation } from "react-router-dom";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
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
                {!pathname.includes('cart') && <>
                    <button
                        className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
                        onClick={() => dispatch(add_to_cart(product))}

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
                    pathname.includes('cart') && <button
                        title='Remove from wishlist'
                        className='bg-indigo-500  py-1 px-2 rounded-full'
                        onClick={() => dispatch(remove_from_cart(product.id))}
                    >
                        <div className="flex justify-evenly items-center text-white p-4">
                            <div>
                                <p>Remove</p>
                            </div>
                            <div><BiX className='text-white' /></div>
                        </div>

                    </button>
                }
            </div>
        </div>
    );
};

export default ProductCard;