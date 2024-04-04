import React from 'react'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
const SignUp = () => {
    return (
        <div className="row mx-auto w-[550px] h-30 w-30 border border-black border-solid border-1 rounded-3xl flex flex-col justify-center items-center p-2 my-20">
            <form className="flex flex-col justify-center">
                <h1 className=" mb-2 mt-5 text-4xl text-secondary hover:text-yellow text-center font-semibold">SignUp</h1>
                <div className="flex flex-row items-center">
                    <FaUser alt="user" id="username" />
                    <label htmlFor="username">Username</label>
                </div>
                <input type="text" id="username" className="border border-black rounded-lg mb-3" />
                <div className="flex flex-row items-center">
                    <RiLockPasswordFill alt="password" id="password" />
                    <label htmlFor="password">Password</label>
                </div>
                <input type="password" id="confirmPassword" required className="border border-black rounded-lg mb-3"/>
                <div className="flex flex-row items-center">
                    <RiLockPasswordFill alt="confirmPassword" id="confirmPassword" />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                </div>
                <input type="password" id="password" required className="border border-black rounded-lg mb-3"/>
                <button type="submit" id="btnLogin " className="mx-auto h-[50px] w-[250px] bg-secondary text-red-50 mt-3 rounded-md mb-4">
                    SignUp
                </button>
                <div>
                    <p>You already have an account? <Link to="/LogIn">Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default SignUp
