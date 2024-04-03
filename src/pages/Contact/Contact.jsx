import React from "react";
import { GiCardExchange } from "react-icons/gi";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdOutlineSupportAgent } from "react-icons/md";
const Contact = () => {
  return (
    <div className="mx-10 my-10">
      <div className="flex flex-row gap-5 justify-center items-center h-40 bg-yellow-200 font-bold text-3xl my-5">
        <div className="flex flex-row items-center gap-2">
          <GiCardExchange />
          <p>14 Days easy changes</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <AiOutlineGlobal />
          <p>Free COD & Shipping</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <MdOutlineSupportAgent />
          <p>Prompt support</p>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-1 flex-col p-7 mx-3">
          <h1 className="font-bold text-4xl mb-3">Contact us</h1>
          <div className="flex flex-col">
            <span>Name</span>
            <input
              type="text"
              className="w-full border border-gray-900 rounded-lg mb-3"
            />
            <span>Email</span>
            <input
              type="text"
              className="w-full border border-gray-900 rounded-lg mb-3"
            />
            <span>Phone</span>
            <input
              type="text"
              className="w-full border border-gray-900 rounded-lg mb-3"
            />
            <span>Message</span>
            <input
              type="text"
              className="w-full h-20 border border-gray-900 rounded-lg mb-3"
            />
            <button
              type="submit"
              className="flex items-center justify-center mb-5 text-white transition-all duration-200 rounded-full bg-gradient-to-r from-primary to-secondary w-24"
            >
              Submit
            </button>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center border border-gray-900 p-4 rounded-3xl mb-3">
          <div className="flex flex-col mb-4">
            <h1 className="font-bold text-4xl mb-6">Get in touch</h1>
            <p>
              TimmyFashion also reproduced in exact original form, accompanied
              by English versions from the 1914 translation by H. Rackham
            </p>
          </div>
          <div>
            <h1 className="font-bold text-xl mb-6">Mon - Fri 9am to 5pm</h1>
            <p>
              Toll - free <span className="font-bold ">0372191612</span>
            </p>
            <p>
              Carry us{" "}
              <span className="font-bold ">timmyfashion@gmail.com</span>
            </p>
            <p>
              Address{" "}
              <span className="font-bold ">
                Chicago HQ Estica Cop. Macomb, MI 48042
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
