import React from 'react'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div>
            <form >
                <h1>Login</h1>
                <div>
                    <FaUser alt="user" id="username" />
                    <label htmlFor="username">Name</label>
                    <input type="text" id="username" placeholder="Enter name" />
                </div>
                <div>                
                    <RiLockPasswordFill alt="password" id="password" />
                    <label htmlFor='password'>Password</label>
                    <input type="password" id="password" placeholder="Enter password" required />
                </div>
                <button type="submit" id="btnLogin">Login</button>
                <div>
                    <p>You don't have an account? <Link to="/Register">Register</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Login
