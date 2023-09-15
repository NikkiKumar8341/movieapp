import React, { useState } from "react";
import { LOGO_URl } from "../utils/constant";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {


  const onlineStatus=useOnlineStatus();

  const {loggedInUser}=useContext(userContext);

  //subscribing to store using a selector

  const cartItems=useSelector((store)=> store.cart.items);

  console.log(cartItems);

    return (
      <>
        <div className="flex justify-between bg-orange-400">
          <div className="">
            <img
              className="w-20 "
              src={LOGO_URl}
            />
          </div>
          <div className="items-center">
          <ul className="flex p-3 m-3">
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link className="px-5" to="/">Home</Link>
          </li>
          <li>
            <Link  className="px-5" to="/about">About</Link>
          </li>
          <li>
            <Link className="px-5"  to='/grocery'>Grocery</Link>
          </li>
          <li>
            <Link className="px-5"  to='/mart'>Mart</Link>
          </li>
          <li>
            <Link className="px-5"  to="/contact">Contact</Link>
          </li>
          <li>
            <Link className="px-5" to='/form'>Form</Link>
          </li>
          <li>
            <Link className=""  to='/cart'> 
            <div className="relative ">
  <div className="bottom-4 absolute left-5">
    <p className="flex h-1 w-1 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{cartItems.length}</p>
  </div>

  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke-width="1.5" stroke="currentColor" className="file:h-7 w-8">
    <path stroke-linecap="round"  stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
  </svg>
  </div>
            </Link>
          </li>
          <li  className="px-5">{loggedInUser}</li>
        </ul>
          </div>
        </div>
      </>
    );
  };

  export default Header;
