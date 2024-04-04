import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext';
import { useContext } from 'react';
import Item from '../../components/Item/Item';

const Shop = (props) => {

    const [menu, setMenu] = useState("Home");
    const {ProductsData} = useContext(ShopContext);
    return (
    <div className="flex flex-col items-center justify-center my-16">
        <div className="flex flex-col items-center justify-center bg-gray-100 h-60 w-[1200px]">
            <h1 className="text-7xl font-bold mb-5">Shop</h1>
            <ul className="flex flex-row items-start justify-center gap-2">
                <li onClick={()=>setMenu("Shop")}>
                <Link to="/AllProducts" className="inline-block px-4 duration-500 border-b-[1px] text-primary hover:text-white border-b-gray-400 hover:border-b-white cursor-pointer" >
                    All
                </Link>{menu==="Men"?<hr/>:<></>}
                </li>
            <li onClick={()=>setMenu("Men")}>
                <Link to="/MenProducts" className="inline-block px-4 duration-500 border-b-[1px] text-primary hover:text-white border-b-gray-400 hover:border-b-white cursor-pointer" >
                    Men
                </Link>{menu==="Men"?<hr/>:<></>}
            </li>
            <li onClick={()=>setMenu("Women")}>
                <Link to="/WomenProducts" className="inline-block px-4 duration-500 border-b-[1px] text-primary hover:text-white border-b-gray-400 hover:border-b-white cursor-pointer" >
                    Women
                </Link>{menu==="Women"?<hr/>:<></>}
            </li>
            <li onClick={()=>setMenu("Kids")}>
                <Link to="/KidsProducts" className="inline-block px-4 duration-500 border-b-[1px] text-primary hover:text-white border-b-gray-400 hover:border-b-white cursor-pointer" >
                    Kids
                </Link>{menu==="Kids"?<hr/>:<></>}
            </li>
        </ul>
        </div>
        <div>
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
    </div>
    )
}

export default Shop
