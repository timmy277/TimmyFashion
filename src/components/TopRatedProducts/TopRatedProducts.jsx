import React from 'react';
import Shirt1 from "../../assets/shirt/shirt.png";
import Shirt2 from "../../assets/shirt/shirt2.png";
import Shirt3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
    {
        id: 1,
        image: Shirt1,
        name: "Casual Wear",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..",
    },
    {
        id: 2,
        image: Shirt2,
        name: "Printed shirt",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 3,
        image: Shirt3,
        name: "Women shirt",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];

const TopRatedProducts = ({ handleOrderPopup }) => {
    return (
        <div >
            <div className='container'>
                {/* Header section */}
                <div className="text-left mb-24 ">
                    <p data-aos="fade-up" className="text-primary text-sm ">Top Rated Products for you</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">Best Products</h1>
                    <p data-aos="fade-up" className='text-gray-500 text-xs'>Lorem ipsum dolor sit amet</p>
                </div>
                {/* Body section */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center gap-20'>
                    {
                        ProductsData.map((data) => (
                            <div data-aos="zoom-in" className='rounded-2xl bg-white dark:bg-gray-400 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]' key={data.id}>
                                {/* image section */}
                                <div className='h-[100px]'>
                                    <img src={data.image} alt="" className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-110 duration-300 drop-shadow-md'/>
                                </div>
                                {/* detail section */}
                                <div className='p-4 text-center'>
                                    {/* star rating */}
                                    <div className='w-full flex items-center justify-center gap-1'>
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-gray-500" />    
                                    </div>
                                    <h1 className='text-xl font-bold'>{data.name}</h1>
                                    <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                                    <button onClick={() => handleOrderPopup()} className="bg-primary text-white py-1 px-4 mt-4 rounded-full hover:scale-105 duration-300 group-hover:bg-white group-hover:text-primary">Order Now</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TopRatedProducts
