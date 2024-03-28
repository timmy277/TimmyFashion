import React from 'react'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
const SignUp = () => {
    return (
    <div>
    <form >
        <h1>SignUp</h1>
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
        <div>
            <RiLockPasswordFill alt="confirmPassword" id="confirmPassword" />
            <label htmlFor='confirmPassword'>confirmPassword</label>
            <input type="confirmPassword" id="confirmPassword" placeholder="Confirm password" required />
        </div>
        <button type="submit" id="btnLogin">Login</button>
        <div>
            <p>You already have an account? <Link to="/Login">Login</Link></p>
        </div>
</form>
    </div>
    )
}

export default SignUp
