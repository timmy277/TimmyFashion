import React from 'react'   
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { ShopContext } from '../../Context/ShopContext';
import { useContext } from 'react'; 
const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    return (
        <div>
            <div>
                <div>
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div>
                    <img src={product.image} alt="" />
                </div>
            </div>
            <div>
                <h1>{product.name}</h1>
                <div>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <CiStar />
                    <p>(277)</p>
                </div>
                <div>
                    <span>{product.old_price}</span>
                    <span>{product.new_price}</span>
                </div>
                <div>
                    {product.description}
                </div>
                <div>
                    <h1>Select Size</h1>
                    <div>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => addToCart(product.id)}>Add To Cart</button>
                <div>
                    <span>Category: </span>
                    {product.category}
                </div>
                <div>
                    <p><span>Tags: </span>Modern, Lastest</p>
                </div>
            </div>
        </div>
    )
}   

export default ProductDisplay