import React from 'react'
import {Link} from 'react-router-dom'
import { FaCartPlus, FaStar, FaEye, FaHeart } from "react-icons/fa";
import { ShopContext } from '../../Context/ShopContext';
import { useContext } from 'react';
const Item = (props) => {
    const {addToCart} = useContext(ShopContext);
    return (
    <div data-aos="fade-up" data-aos-delay={props.aosDelay} key={props.id} className='space-y-3 group'>
        <Link to = {`/Product/${props.id}`}>
            <img onClick={() => window.scrollTo(0, 0)} src={props.image} alt="" className='h-[220px] w-[150px] object-cover rounded-md group-hover:scale-110'/>
        </Link>
        <div className="absolute top-0 right-0 flex flex-col items-center gap-3 transform translate-x-full translate-y-[-50%] opacity-0 group-hover:opacity-80 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-500">
            <FaCartPlus onClick={() => addToCart(props.id)} className="cursor-pointer hover:scale-150 hover:text-purple-800" />
            <Link to = {`/Product/${props.id}`}>
                <FaEye className="cursor-pointer hover:scale-150 hover:text-purple-800" />
            </Link>
            <FaHeart className="cursor-pointer hover:scale-150 hover:text-purple-800" />
        </div>
        <p className="font-semibold">{props.name}</p>
        <div className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />
            <span>{props.rating}</span>
        </div>
        <div className="flex items-center gap-4 ml-2 space-x-4 justify-betweens">
            <span className="font-bold text-xl text-green-600">
                ${props.new_price}.00
            </span>
            <span className="line-through">
                ${props.old_price}.00
            </span>
        </div>
    </div>
    )
}

export default Item;