import React, { useState } from "react";
import Logo from "../../assets/websites/logo.png";
import { IoMdSearch } from "react-icons/io";
// import {DarkMode} from "../Navbar/DarkMode";
import {FaCartShopping} from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { useContext } from "react";

const Navbar = ({}) => {

    const [menu, setMenu] = useState("Home");
    const {getTotalCartItem} = useContext(ShopContext);
    
    return (
        <div className="relative z-40 duration-200 bg-white shadow-md dark:bg-gray-900 dark:text-white">
            {/* uppper navbar */}
            <div className="py-2 bg-primary/40">
                <div className="container flex items-center justify-between">
                    <div>
                        <Link to="/" className="flex gap-2 text-2xl font-bold sm:text-3xl">
                            <img src={Logo} alt="logo" className="w-10 "/>TimmyFashion
                        </Link>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                        <div className="relative hidden group sm:block">
                            <input type="text" placeholder="Search" className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"/>
                            <IoMdSearch className="absolute text-gray-500 -translate-y-1/2 group-hover:text-primary top-1/2 right-3"
                            />
                        </div>
                        {/* order button */}
                        <button className="flex items-center gap-3 px-4 py-1 text-white transition-all duration-200 rounded-full bg-gradient-to-r from-primary to-secondary group"
                        >
                            <span className="hidden transition-all duration-200 group-hover:block">Order</span> 
                            <Link to="/Cart">
                                <FaCartShopping className="text-xl text-white cursor-pointer drop-shadow-sm"/>
                            </Link>
                            <span>{getTotalCartItem()}</span>
                        </button>
                        {/* Darkmode switch */}
                        <div>
                            {/* <DarkMode /> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* lower navbar */}
            <div data-aos="zoom-in" className="flex justify-center">
                <ul className="items-center hidden gap-4 sm:flex">
                    <li onClick={()=>setMenu("Home")}>
                        <Link to="/" className="inline-block px-4 duration-500 hover:text-primary" >
                            Home
                        </Link>{menu==="Men"?<hr/>:<></>}
                    </li>
                    <li onClick={()=>setMenu("Men")}>
                        <Link to="/Men" className="inline-block px-4 duration-500 hover:text-primary" >
                            Men
                        </Link>{menu==="Men"?<hr/>:<></>}
                    </li>
                    <li >
                        <Link to="/Women" className="inline-block px-4 duration-500 hover:text-primary" >
                            Women
                        </Link>{menu==="Women"?<hr/>:<></>}
                    </li>
                    <li >
                        <Link to="/Kids" className="inline-block px-4 duration-500 hover:text-primary" >
                            Kids
                        </Link>{menu==="Kids"?<hr/>:<></>}
                    </li>
                    {/* Dropdown and Link */}
                    <li className="relative cursor-pointer group">
                        <Link to="/Cart" className="flex items-center gap-[2px] py-2">Trending Items
                            <FaCaretDown className="transition-all duration-200 group-hover:rotate-180"/>
                        </Link>
                        <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
                            <ul>
                                <li onClick={()=>setMenu("Men")}>
                                    <Link to="/Men" className="inline-block px-4 duration-500 hover:text-primary" >
                                        Men
                                    </Link>{menu==="Men"?<hr/>:<></>}
                                </li>
                                <li >
                                    <Link to="/Women" className="inline-block px-4 duration-500 hover:text-primary" >
                                        Women
                                    </Link>{menu==="Women"?<hr/>:<></>}
                                </li>
                                <li >
                                    <Link to="/Kids" className="inline-block px-4 duration-500 hover:text-primary" >
                                        Kids
                                    </Link>{menu==="Kids"?<hr/>:<></>}
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link to="/Login" className="inline-block px-4 duration-500 hover:text-primary">Login</Link>
                    </li>
                    <li>
                        <Link to="/SignUp" className="inline-block px-4 duration-500 hover:text-primary">SignUp</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
