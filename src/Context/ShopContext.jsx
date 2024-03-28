import React from 'react'
import ProductsData from '../assets/data';

export const ShopContext = React.createContext(null);
const ShopContextProvider = (props) => {

    const contextValue = {ProductsData};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider