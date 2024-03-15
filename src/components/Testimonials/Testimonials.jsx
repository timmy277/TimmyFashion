import React from 'react';
import Slider from 'react-slick';

const testimonialsData = [
    {
        id : 1,
        name : "John",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        image: "https://picsum.photos/103/103",
    },
    {
        id : 2,
        name : "Sachin Tendulkar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        image: "https://picsum.photos/104/104",
    },
    {
        id : 3,
        name : "Victor",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        image: "https://picsum.photos/102/102",
    },
    {
        id : 4,
        name : "Peter",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        image: "https://picsum.photos/101/101",
    },    {
        id : 5,
        name : "Tom",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        image: "https://picsum.photos/104/104",
    },
];


const Testimonials = () => {

    var settings = {
        dots: true,
        arrows: false,
        infinity: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        // slidesToShow: 2,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinity: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };




    return (
        <div className='py-10 mb-10'>
            <div className="container">
                {/* header section */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-primary text-sm ">What our customers are saying</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">Testimonials</h1>
                    <p data-aos="fade-up" className='text-gray-500 text-xs'>Lorem ipsum dolor sit amet</p>
                </div>
                {/* Testimonials card */}
                <div data-aos="zoom-in">
                    <Slider {...settings}>
                        {testimonialsData.map((data) => (
                            <div className="flex flex-col gap-10 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative my-6 " key={data.id}>
                                <div className="mb-4">
                                    <img src={data.image} alt="" className='w-20 h-20 rounded-full'/>
                                </div>
                                <div className="flex flex-col items-center gap-4">
                                    <div className="space-y-3">
                                        <p className='text-gray-500 text-xs'>{data.text}</p>
                                        <h1 className="font-bold text-xl text-black/80 dark: text-light">{data.name}</h1>
                                    </div>
                                </div>
                                <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'></p>
                            </div>
                        ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
