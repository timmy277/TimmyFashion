import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";
const Breadcrums = (props) => {
    const {product} = props;
    return (
        <div className='flex flex-row items-center my-3 ml-10 text-sm text-gray-500'>
            HOME
            <MdArrowForwardIos />
            SHOP
            <MdArrowForwardIos />
            {product.category}
            <MdArrowForwardIos />
            <span className='font-bold'>{product.name}</span>
        </div>
    )
}

export default Breadcrums