import React from 'react'

const Pagination = ({totalProduct, productsPerPage, setCurrentPage}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalProduct/productsPerPage); i++) {
        pages.push(i);
    }

    return (
    <div>
        {pages.map((page, index) => {
            return (
                <button key={index} onClick={() => setCurrentPage(page)} className='px-4 py-1 my-4 mx-4 text-center text-white rounded-md cursor-pointer bg-primary'>{page}</button>
            )
        })}
    </div>
    )
}

export default Pagination
