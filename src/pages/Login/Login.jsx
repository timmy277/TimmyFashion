import React from "react";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="row mx-auto w-[550px] h-30 w-30 border border-black border-solid border-1 rounded-3xl flex flex-col justify-center items-center p-2">
      <form className="flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-2 mt-5 text-4xl text-[#6495ed] hover:text-yellow text-center font-semibold">Login</h1>
        <div className="flex flex-row items-center">
          <FaUser alt="user" id="username" />
          <label htmlFor="username">Name</label>
        </div>
        <input type="text" id="username" placeholder="Enter name" />
        <div className="flex flex-row items-center">
          <RiLockPasswordFill alt="password" id="password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="password" id="password" placeholder="Enter password" required className="btn btn-success mx-auto h-[50px] w-[250px] bg-[#6495ed] text-red-50 mt-3 rounded-md mb-4"/>
        <button type="submit" id="btnLogin">
          Login
        </button>
        <div>
          <p>
            You don't have an account? <Link to="/SignUp">SignUp</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
