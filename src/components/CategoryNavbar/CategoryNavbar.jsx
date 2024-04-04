import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const CategoryNavbar = () => {
    const [menu, setMenu] = useState("null");

    return (
        <div className="flex flex-col items-center justify-center bg-gray-200 h-60 w-[1200px]">
            <h1 className="text-7xl font-bold mb-5">Shop</h1>
            <ul className="flex flex-row items-start justify-center gap-2">
                <li onClick={()=>setMenu("Shop")}>
                    <Link to="/AllProducts" className="category-navbar-item" >
                        <span className={`${menu === "Shop" ? "text-red-700" : <></>}`}>All</span>
                    </Link>
                </li>
                <li onClick={()=>setMenu("Men")}>
                    <Link to="/Men" className="category-navbar-item" >
                        <span className={`${menu === "Men" ? "text-red-700" : <></>}`}>Men</span>
                    </Link>
                </li>
                <li onClick={()=>setMenu("Women")}>
                    <Link to="/Women" className="category-navbar-item" >
                        <span className={`${menu === "Women" ? "text-red-700" : <></>}`}>Women</span>
                    </Link>
                </li>
                <li onClick={()=>setMenu("Kids")}>
                    <Link to="/Kids" className="category-navbar-item"  >
                        <span className={`${menu === "Kids" ? " text-red-700" : <></>}` }>Kids</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default CategoryNavbar
