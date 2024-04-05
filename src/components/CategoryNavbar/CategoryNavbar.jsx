import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const CategoryNavbar = () => {
    const [menu, setMenu] = useState("All");

    return (
        <div className="flex flex-col items-center justify-center bg-gray-200 h-60 w-[1200px]">
            <h1 className="text-7xl font-bold mb-5">{menu}</h1>
            <ul className="flex flex-row items-start justify-center gap-2">
                <li onClick={()=>setMenu("All")} className={`${menu === "All" ? "bg-black" : <></>}`}>
                    <Link to="/AllProducts" className="category-navbar-item" >
                        <span className={`${menu === "All" ? "text-primary" : <></>}`}>All</span>
                    </Link>
                </li>
                <li onClick={()=>setMenu("Men")} className={`${menu === "Men" ? "bg-black" : <></>}`}>
                    <Link to="/Men" className="category-navbar-item" >
                        <span className={`${menu === "Men" ? "text-primary" : <></>}`}>Men</span>
                    </Link>
                </li>
                <li onClick={()=>setMenu("Women")} className={`${menu === "Women" ? "bg-black" : <></>}`}>
                    <Link to="/Women" className="category-navbar-item" >
                        <span className={`${menu === "Women" ? "text-primary" : <></>}`}>Women</span>
                    </Link>
                </li>
                <li onClick={()=>setMenu("Kids")} className={`${menu === "Kids" ? "bg-black" : <></>}`}>
                    <Link to="/Kids" className="category-navbar-item"  >
                        <span className={`${menu === "Kids" ? " text-primary" : <></>}` }>Kids</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default CategoryNavbar
