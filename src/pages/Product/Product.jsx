import React from 'react'
import {useContext} from 'react'
import { useParams } from 'react-router-dom';
import Breadcrums from '../../components/Breadcrums/Breadcrums';
import { ShopContext } from '../../Context/ShopContext';
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../../components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../../components/RelatedProduct/RelatedProduct';
const Product = () => {
    const {ProductsData} = useContext(ShopContext);
    const {productId} = useParams();
    const product = ProductsData.find(e => e.id === Number(productId));
    return (
    <div>
        <Breadcrums product={product} />
        <ProductDisplay product={product} />
        <DescriptionBox />
        <RelatedProduct />
    </div>
    )
}

export default Product
