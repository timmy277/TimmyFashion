import React from 'react'
import { ShopContext } from '../../Context/ShopContext';
import { useContext } from 'react';
import Item from '../../components/Item/Item';
import AllProducts from '../../components/AllProducts/AllProducts';

const Shop = (props) => {

    const {ProductsData} = useContext(ShopContext);
    return (
        <div className="flex flex-col items-center justify-center mb-16">
            <AllProducts />
            <div>
            {ProductsData.map((item, i) => {
                if(props.category === item.category){
                    return (
                        <Item key={i} id={item.id}  image={item.img} name={item.name} new_price={item.new_price} old_price={item.old_price} />
                    )
                }
                else{
                    return null;
                }
            })}
            </div>
        </div>
    )
}

export default Shop
