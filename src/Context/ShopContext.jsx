import React from 'react'
import ProductsData from '../assets/data';

export const ShopContext = React.createContext(null);

const getDefaultCart = () =>{
    let cart = {};
    for(let i = 0; i < ProductsData.length + 1; i++){
        cart[i] = 0;
    }
    return cart;
}
const ShopContextProvider = (props) => {

    
    const [cartItem, setCartItem] = React.useState(getDefaultCart());


    const addToCart = (itemId) => {
        setCartItem((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = ProductsData.find((product) => product.id === Number(item));
                totalAmount +=  itemInfo.new_price * cartItem[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItem = () => {
        let totalItem = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                totalItem += cartItem[item]
            }
        }
        return totalItem;
    }

    const contextValue = {getTotalCartItem, getTotalCartAmount,ProductsData, cartItem, addToCart, removeFromCart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider