import React from 'react'
import Woman1 from "../../assets/women/women1.png";
import Woman2 from "../../assets/women/women2.png";
import Woman3 from "../../assets/women/women3.png";
import Woman4 from "../../assets/women/women4.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
    {
        id: 1,
        img: Woman1,
        title: "Women Ethnic",
        rating: 5.0,
        color: "White",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Woman2,
        title: "Women Western",
        rating: 4.4,
        color: "Red",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Woman3,
        title: "Goggle",
        rating: 4.7,
        color: "Brown",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Woman4,
        title: "Printed T-shirt",
        rating: 4.5,
        color: "Pink",
        aosDelay: "800",
    },
    {
        id: 5,
        img: Woman2,
        title: "Fashion T-shirt",
        rating: 4.5,
        color: "Teal",
        aosDelay: "600",
    },
];

const Products = () => {
    return (
        <div className='mt-14 mb-12'>
            <div className='container'>
            {/* Header section */}
            <div className="text-center mb-10 max-w-[600px] mx-auto">
                <p data-aos="fade-up" className="text-primary text-sm ">Top Selling Products for you</p>
                <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
                <p data-aos="fade-up" className='text-gray-500 text-xs'>Lorem ipsum dolor sit amet</p>
            </div>
            {/* Body section */}
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                    {/* card section */}
                    {
                        ProductsData.map((data) => (
                            <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id} className='space-y-3'>
                                <img src={data.img} alt="" className='h-[220px] w-[150px] object-cover rounded-md'/>
                                <div>
                                    <h3 className="font-semibold">{data.title}</h3>
                                    <p className='text-gray-700 text-sm'>{data.color}</p>
                                    <div className="flex items-center gap-1">
                                        <FaStar className="text-yellow-500" />
                                        <span>{data.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* view all button */}
                <div className="flex justify-center">
                    <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-4 rounded-md'>View All Products</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Products
