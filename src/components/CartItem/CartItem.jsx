import React from 'react'
import { ShopContext } from '../../Context/ShopContext';
import { useContext } from 'react';
import { IoBagRemoveSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
const CartItem = () => {
    const {getTotalCartAmount, ProductsData, cartItem, removeFromCart, addToCart} = useContext(ShopContext);
    
    return (
        <div className='container flex flex-col my-3'>
            <div className='grid grid-cols-9 items-center font-bold'>
                <p className='col-span-2'>Product</p>
                <p className='col-span-2'>Name</p>
                <p className='col-span-1'>Price</p>
                <p className='col-span-1'>Quantity</p>
                <p className='col-span-1'>Total</p>
                <p className='col-span-1'>Remove</p>
            </div>
            <hr/>
            {ProductsData.map((e) => {
                if(cartItem[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className='grid grid-cols-9 items-center my-4'>
                                <img src={e.img} alt="" className='h-[100px] w-[100px] col-span-2'/>
                                <p className='col-span-2'>{e.name}</p>
                                <p className='col-span-1'>${e.new_price}.00</p>
                                <div className='flex flex-row items-center gap-4'>
                                    <FaMinus onClick={() => removeFromCart(e.id)} className='col-span-1'/>
                                    <span className='col-span-1'>{cartItem[e.id]}</span>
                                    <FaPlus onClick={() => addToCart(e.id)} className='col-span-1'/>
                                </div>
                                <p className='col-span-1'>${e.new_price * cartItem[e.id]}.00</p>
                                <IoBagRemoveSharp onClick={() => removeFromCart(e.id)} className='col-span-1'/>
                            </div>
                            <hr/>
                        </div>
                    )
                }
                return null;
            })}
            <div className='mx-5 my-6'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-3xl font-bold'>Cart Totals</h1>
                    <div>
                        <div className='flex flex-row gap-3 my-2'>
                            <p className='font-bold'>Subtotal: </p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className='flex flex-row gap-2'>
                            <p className='font-bold'>Shipping fee: </p>
                            <p className='text-green-500'> Free</p>
                        </div>
                        <hr/>
                        <div className='flex flex-row gap-2'>
                            <h3 className='font-bold'>Total: </h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button className='px-4 py-1 mt-5 text-center text-white rounded-md cursor-pointer bg-primary w-48'>Proceed to checkout</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;