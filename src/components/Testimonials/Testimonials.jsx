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
                    <p data-aos="fade-up" className="text-sm text-primary ">What our customers are saying</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">Testimonials</h1>
                    <p data-aos="fade-up" className='text-xs text-gray-500'>Lorem ipsum dolor sit amet</p>
                </div>
                {/* Testimonials card */}
                <div data-aos="zoom-in" className='mx-4'>
                    <Slider {...settings}>
                        {testimonialsData.map((data) => (
                            <div className="relative flex flex-col gap-10 px-6 py-8 mx-1 my-6 shadow-lg rounded-xl dark:bg-gray-800 bg-primary/10 " key={data.id}>
                                <div className="mb-4">
                                    <img src={data.image} alt="" className='w-20 h-20 rounded-full'/>
                                </div>
                                <div className="flex flex-col items-center gap-4">
                                    <div className="space-y-3">
                                        <p className='text-xs text-gray-500'>{data.text}</p>
                                        <h1 className="text-xl font-bold text-black/80 dark: text-light">{data.name}</h1>
                                    </div>
                                </div>
                                <p className='absolute top-0 right-0 font-serif text-black/20 text-9xl'></p>
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
