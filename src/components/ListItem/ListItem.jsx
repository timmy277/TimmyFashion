import React from 'react'
import { FaStar } from "react-icons/fa";
import ProductsData from '../../assets/data';
import Item from '../Item/Item';

const ListItem = (props) => {
    return (
        <div className='mb-12 mt-14'>
            <div className='container'>
            {/* Header section */}
            <div className="text-center mb-10 max-w-[600px] mx-auto">
                <p data-aos="fade-up" className="text-sm text-primary ">Top Selling Products for you</p>
                <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
                <p data-aos="fade-up" className='text-xs text-gray-500'>Lorem ipsum dolor sit amet</p>
            </div>
            {/* Body section */}
            <div>
                <div className='grid grid-cols-1 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center'>
                    {/* card section */}
                    {
                        ProductsData.map((item, i) => (
                            <Item key={i} id={item.id}  image={item.img} name={item.name} new_price={item.new_price} old_price={item.old_price} />
                            // <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id} className='space-y-3'>
                            //     <img src={data.img} alt="" className='h-[220px] w-[150px] object-cover rounded-md'/>
                            //     <div>
                            //         <h3 className="font-semibold">{data.name}</h3>
                            //         <div className="flex items-center gap-1">
                            //             <FaStar className="text-yellow-500" />
                            //             <span>{data.rating}</span>
                            //         </div>
                            //     </div>
                            // </div>
                        ))
                    }
                </div>
                {/* view all button */}
                <div className="flex justify-center">
                    <button className='px-4 py-1 mt-10 text-center text-white rounded-md cursor-pointer bg-primary'>View All Products</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ListItem
