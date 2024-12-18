import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/userContext";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
const Header = () => {
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className=''>
      <div className='flex flex-wrap justify-between dark bg-cyan-50 shadow-lg dark:bg-black dark:text-white dark:shadow-white dark:border-b-[1px] border-b-cyan-50'>
        <div className='logo-container'>
          <img className='logo w-24' src={LOGO_URL} />
        </div>
        <div className='flex items-center p-2'>
          <ul className='flex text-lg'>
            <li className='px-2'>
              <Link to='/'>Home</Link>
            </li>
            <li className='px-2'>
              <Link to='/about'>About Us</Link>
            </li>
            <li className='px-2'>
              <Link to='/contactus'>Contact Us</Link>
            </li>
            <li className='px-2'>
              <Link to='/groceries'>Groceries</Link>
            </li>
            <li className='px-2'>
              <Link to='/cart'>Cart ({cartItems.length})</Link>
            </li>
            <li className='px-2'>Cart</li>
            <li className='font-bold'>{loggedInUser}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
