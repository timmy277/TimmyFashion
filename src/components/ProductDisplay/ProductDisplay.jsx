import React from 'react'   
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { ShopContext } from '../../Context/ShopContext';
import { useContext } from 'react'; 
const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    return (
        <div className="ml-10 bg-slate-100 ">
            <div className="flex flex-row gap-10 pb-16">
                <div>
                    <img src={product.img} alt="" className="mt-5 mb-1 ml-4 h-[100%] w-[100%] bg-cover"/>
                </div>
                <div>
                    <h1 className='mt-3 text-5xl font-extrabold'>{product.name}</h1>
                    <div className='flex items-center gap-2 mt-4'>
                        <span className='text-3xl font-medium text-red-700'>${product.new_price}.00</span>
                        <span className='text-xl line-through'>${product.old_price}.00</span>
                    </div>
                    <div className='my-3 font-medium'>
                        {product.description}
                    </div>
                    <div className='flex items-center gap-1 my-4'>
                        <span className='mr-3'>Rate: </span>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <CiStar />
                        <p>(277)</p>
                        </div>
                    <div>
                </div>
                <div className='flex gap-3'>
                    <h1>Select Size</h1>
                    <select>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>
                    </select>
                </div>
                <button onClick={() => addToCart(product.id)} className='px-4 py-1 mt-10 text-center text-white rounded-md cursor-pointer bg-primary hover:scale-110 hover:text-gray-700'>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}   

export default ProductDisplay