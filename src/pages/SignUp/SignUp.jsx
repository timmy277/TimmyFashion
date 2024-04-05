import React from 'react'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import firebase from '../../firebaseConfig';
import { useState } from 'react';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    const signup = async () => {
            try {
                const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
                if(user){
                    alert("Account created successfully");
                }
            } catch (error) {
                alert(error);
            }
    }
    return (
        <div className="row mx-auto w-[550px] h-30 w-30 border border-black border-solid border-1 rounded-3xl flex flex-col justify-center items-center p-2 my-20">
            <form className="flex flex-col justify-center">
                <h1 className=" mb-2 mt-5 text-4xl text-secondary hover:text-yellow text-center font-semibold">SignUp</h1>
                <div className="flex flex-row items-center">
                    <FaUser alt="Email" id="Email" />
                    <label htmlFor="Email">Email</label>
                </div>
                <input type="email" value={email} id="Email" onChange={(e) => setEmail(e.target.value)} className="border border-black rounded-lg mb-3" />
                <div className="flex flex-row items-center">
                    <RiLockPasswordFill alt="password" id="password" />
                    <label htmlFor="password">Password</label>
                </div>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="confirmPassword" required className="border border-black rounded-lg mb-3"/>

                <button type="submit" onClick={() => signup()} id="btnLogin " className="mx-auto h-[50px] w-[250px] bg-primary text-red-50 mt-3 rounded-md mb-4 hover:bg-secondary">
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
