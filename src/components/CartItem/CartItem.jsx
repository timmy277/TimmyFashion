import React from 'react'
import { ShopContext } from '../../Context/ShopContext';
import { useContext } from 'react';
import { IoBagRemoveSharp } from "react-icons/io5";
const CartItem = () => {
    const {getTotalCartAmount, ProductsData, cartItem, removeFromCart} = useContext(ShopContext)
    return (
        <div>
            <div>
                <p>Product</p>
                <p>Name</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
            {ProductsData.map((e) => {
                if(cartItem[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div>
                                <img src={e.img} alt="" />
                                <p>{e.name}</p>
                                <p>{e.new_price}</p>
                                <p>{cartItem[e.id]}</p>
                                <p>{e.new_price * cartItem[e.id]}</p>
                                <IoBagRemoveSharp onClick={() => removeFromCart(e.id)} />
                            </div>
                            <hr/>
                        </div>
                    )
                }
                return null;
            })}
            <div>
                <div>
                    <h1>Cart Totals</h1>
                    <div>
                        <div>
                            <p>Subtotal: </p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div>
                            <p>Shipping fee: </p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <div>
                            <h3>Total: </h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>Proceed to checkout</button>
                </div>
                <div>
                    <p>If you have promote code, enter it here!</p>
                    <div>
                        <input type="text" />
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;