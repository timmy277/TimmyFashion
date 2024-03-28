import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";
const Breadcrums = (props) => {
    const {product} = props;
    return (
        <div>
            HOME
            <MdArrowForwardIos />
            SHOP
            <MdArrowForwardIos />
            {product.category}
            <MdArrowForwardIos />
            {product.name}
        </div>
    )
}

export default Breadcrums