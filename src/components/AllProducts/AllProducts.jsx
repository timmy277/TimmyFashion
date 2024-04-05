import React, { useEffect } from 'react'
import { ShopContext } from '../../Context/ShopContext';
import { useContext } from 'react';
import Item from '../Item/Item';
import CategoryNavbar from '../CategoryNavbar/CategoryNavbar';
import Pagination from '../Pagination/Pagination';
const AllProducts = () => {

    const { ProductsData } = useContext(ShopContext);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [productsPerPage, setProductsPerPage] = React.useState(8);
    const lastProductIndex = currentPage * productsPerPage;
    const firstProductIndex = lastProductIndex - productsPerPage;
    const currentProducts = ProductsData.slice(firstProductIndex, lastProductIndex);

    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products')
    //         .then(res=>res.json())
    //         .then(data=>setProducts(data))
    //         .catch(err=>console.log(err))
    // },[])


    return (
        <div className='flex flex-col items-center justify-center my-16'>
            <CategoryNavbar />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 place-items-center my-10 gap-10">
                {currentProducts.map((item, i) => {
                    return (
                        <div key={i} className="flex justify-center items-center flex-row">
                            <Item key={i} id={item.id} image={item.img} name={item.name} new_price={item.new_price} old_price={item.old_price} rating={item.rating}/>
                        </div>
                    );
                })}
            </div>
            <Pagination totalProduct={ProductsData.length} productsPerPage={productsPerPage} setCurrentPage={setCurrentPage}/>
        </div>
    )
}

export default AllProducts
