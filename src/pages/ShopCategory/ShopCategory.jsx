import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext';
import { IoMdArrowDropdownCircle } from "react-icons/io";
import Item from '../../components/Item/Item';
const ShopCategory = (props) => {
    const {ProductsData} = useContext(ShopContext);
    return (
    <div>
        <img src={props.banner} alt="" />
        <div>
            <p><span>Showing 1-12</span> out of 36 products</p>
        </div>
        <div>
            <p>Sort by</p>
            <IoMdArrowDropdownCircle />
        </div>
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

export default ShopCategory;
