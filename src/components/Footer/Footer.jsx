import React from 'react'
import FooterImg from '../../assets/websites/footer-pattern.png'
import FooterLogo from '../../assets/websites/logo.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";



const FooterBackground = {
    backgroundImage: `url(${FooterImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    height: '100%',
    width: '100%'
};

const FooterLinks = [
    {
        name: "Home",
        link: "/#",
    },
    {
        name: "About",
        link: "/#",
    },
    {
        name: "Contact",
        link: "/#",
    },
    {
        name: "Blog",
        link: "/#",
    },
    {
        name: "Products",
        link: "/#",
    },
];  


const Footer = () => {
    return (
        <div style={FooterBackground} className="text-white mb-20">
            <div className="container">
                <div data-aos="zoom-in" className="grid md:grid-cols-3 pt-5 pb-44 ">
                    {/* detail */}
                    <div className="py-10 px-4">
                        <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>
                            <img src={FooterLogo} alt="" className='max-w-[50px]'/>TimmyFashion</h1>
                        <p>Timmy Fashion: Where Style Meets Elegance!</p>
                    </div>
                    {/* link */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 col-span-2 md:pl-10">
                        <div className="">
                            <div className="py-8 px-4">
                                <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Vital Links</h1>
                                <ul className='flex flex-col gap-3'>
                                    {FooterLinks.map((link) => (
                                        <li key={link.name} className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-500'>
                                            <span>{link.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="">
                            <div className="py-8 px-4">
                                <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Vital Links</h1>
                                <ul className='flex flex-col gap-3'>
                                    {FooterLinks.map((link) => (
                                        <li key={link.name} className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-500'>
                                            <span>{link.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                                            {/* social links */}
                    <div className="">
                        <div className="flex items-center gap-3 mt-9">
                            <a href="#">
                                <FaInstagram className="text-3xl hover:text-primary hover:translate-x-1 duration-300 cursor-pointer"/>
                            </a>
                            <a href="#">
                                <FaFacebook className="text-3xl hover:text-primary hover:translate-x-1 duration-300 cursor-pointer"/>
                            </a>
                            <a href="#">
                                <FaLinkedin className="text-3xl hover:text-primary hover:translate-x-1 duration-300 cursor-pointer"/>
                            </a>
                        </div>
                        <div className="mt-6">
                            <div className="flex items-center gap-3">
                                <FaLocationArrow className="flex items-center gap-5 text-3xl hover:text-primary hover:translate-x-1 duration-300 cursor-pointer"/>
                                <p className='text-gray-500'>Ha Noi, Viet Nam</p>
                            </div>
                            <div className="flex items-center gap-3 my-5">
                                <FaMobileAlt className="flex items-center gap-5 text-3xl hover:text-primary hover:translate-x-1 duration-300 cursor-pointer"/>
                                <p className='text-gray-500'>+84 372 191 612</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
