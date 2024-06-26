import React from 'react'

const DescriptionBox = () => {
    return (
        <div className='flex flex-col gap-4 my-6 ml-10'>
            <div>
                <div className='flex items-center justify-start'>
                    <div className='p-2 text-xl font-bold border border-gray-300'>Description</div>
                    <div className='p-2 text-xl font-bold border '>Reviews(277)</div>
                </div>
            </div>
            <div>
                <p>Welcome to our stylish online boutique, where fashion meets convenience! Discover the latest trends, timeless classics, and everything in between at our one-stop destination for all your fashion needs.</p>
                <p>At TimmyFashion, we're passionate about providing you with a seamless shopping experience, right from the comfort of your home. Whether you're searching for the perfect outfit for a special occasion or refreshing your everyday wardrobe, we've got you covered.</p>
            </div>
        </div>
    )
}

export default DescriptionBox