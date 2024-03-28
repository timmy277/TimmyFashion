import React from 'react'
import {useContext} from 'react'
import { useParams } from 'react-router-dom';
import Breadcrums from '../../components/Breadcrums/Breadcrums';
import { ShopContext } from '../../Context/ShopContext';
const Product = () => {
    const {ProductsData} = useContext(ShopContext);
    const {productId} = useParams();
    const product = ProductsData.find(e => e.id === Number(productId));
    return (
    <div>
        <Breadcrums product={product} />
    </div>
    )
}

export default Product
