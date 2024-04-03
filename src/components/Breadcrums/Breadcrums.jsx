import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from 'react-router-dom';
const Breadcrums = (props) => {
    const {product} = props;
    return (
        <div className='flex flex-row items-center my-3 ml-10 text-sm text-gray-500'>
            <Link to='/'>HOME</Link>
            <MdArrowForwardIos />
            <Link to="/Shop">Shop</Link>
            <MdArrowForwardIos />
            {product.category}
            <MdArrowForwardIos />
            <span className='font-bold'>{product.name}</span>
        </div>
    )
}

export default Breadcrums