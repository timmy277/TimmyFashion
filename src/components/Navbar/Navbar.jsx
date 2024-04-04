import React, { useState } from "react";
import Logo from "../../assets/websites/logo.png";
import { IoMdSearch } from "react-icons/io";
// import {DarkMode} from "../Navbar/DarkMode";
import {FaCartShopping} from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
const Navbar = () => {

    const {getTotalCartItem} = useContext(ShopContext);
    const [active, setActive] = useState(null);
    const [showUser, setShowUser] = useState(false);
    
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
                            <Link to="/Cart" className="relative flex items-center justify-center">
                                <span className="hidden mr-3 uration-200 mtransition-all group-hover:block">Order</span> 
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
                
                    <li onClick={()=>setActive("Home")}>
                        <Link to="/" className="inline-block hover:text-primary px-4 top-menu-item" >
                            <span className={`${active === "Home" ? "text-primary" : <></>}`}>Home</span>
                        </Link>
                    </li>
                    
                    <li onClick={()=>setActive("Shop")}>
                        <Link to="/Shop" className="inline-block px-4 hover:text-primary top-menu-item" >
                        <span className={`${active === "Shop" ? "text-primary" : <></>}`}>Shop</span>
                        </Link>
                    </li>
                    
                    <li onClick={()=>setActive("About")}>
                        <Link to="/About" className="inline-block px-4 top-menu-item hover:text-primary " >
                            <span className={`${active === "About" ? "text-primary" : <></>}`}>About</span>
                        </Link>
                    </li>
                    
                    <li onClick={()=>setActive("Blog")}>
                        <Link to="/Blog" className="inline-block px-4 top-menu-item hover:text-primary" >
                            <span className={`${active === "Blog" ? "text-primary" : <></>}`}>Blog</span>
                        </Link>
                    </li>
                    <li onClick={()=>setActive("Contact")}>
                        <Link to="/Contact" className="inline-block px-4 top-menu-item hover:text-primary" >
                            <span className={`${active === "Contact" ? "text-primary" : <></>}`}>Contact</span>
                        </Link>
                    </li>
                        <div className="relative flex items-center gap-4 pr-6 mt-2 cursor-pointer lg:mt-0">
                            <div onClick={() => setShowUser(!showUser)} className="flex">
                                <FaUser />
                                <FaCaretDown />
                            </div>
                            {showUser && (
                                <motion.ul
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute left-0 z-50 h-auto p-4 pb-6 bg-gray-300 top-4 w-44 text-primary"
                                >
                                    <Link to="/Login">
                                        <li className="text-primary px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                                            Login
                                        </li>
                                    </Link>
                                    <Link onClick={() => setShowUser(false)} to="/SignUp">
                                        <li className="text-primary px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                                            Sign Up
                                    </li>
                                    </Link>
                                        <li className="text-primary px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                                            Profile
                                        </li>
                                        <li className="text-primary px-4 py-1 border-b-[1px] border-b-gray-400  hover:border-b-white hover:text-white duration-300 cursor-pointer">
                                            Others
                                        </li>
                                </motion.ul>
                            )}
                        </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
