import React from 'react'
import BannerImg from '../../assets/websites/orange-pattern.png'

const BannerBackground = {
    backgroundImage: `url(${BannerImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%'
}

const Subscribe = () => {
    return (
        <div data-aos="zoom-in" className='mb-20 bg-gray-800 text-white' style={BannerBackground}>
            <div className='container backdrop-blur-sm py-10'>
                <div className="space-y-6 max-w-xl mx-auto">
                    <h1 className='text-2xl !text-center sm:text-left sm:text-4xl font-semibold'>Get Notified About New Products</h1>
                    <input data-aos="fade-up" type="text" placeholder='Enter your email' className='w-full p-3 mb-6'/>
                </div>
            </div>
        </div>
    )
}

export default Subscribe
