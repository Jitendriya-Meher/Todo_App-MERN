
import React from 'react';
import logo from "../assets/Logo.svg";
import { Link, NavLink } from 'react-router-dom';
import "./NavBar.css"
import { useDispatch, useSelector } from 'react-redux';
import { logOutAuth } from '../store/Slices/authSlice';
import { toast } from 'react-toastify';


const NavBar = () => {

    const {isLoggedin, isAdmin} = useSelector(state=>state.auth);
    const dispatch = useDispatch();

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto flex-wrap gap-y-4 gap-x-8'>

     <Link to='/' className=' mx-auto flex gap-1 justify-center items-start text-white text-xl font-semibold'>
        <img src={logo} alt='logo' width={160} height={32} loading='lazy'></img>
     </Link>

     <nav className='navbar mx-auto'>
        <ul className='flex gap-x-6 text-gray-400 flex-wrap items-center justify-center'>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact Us</NavLink>
            </li>
        </ul>
     </nav>

     <div className="flex item-center justify-center gap-x-4 text-richblack-100 nav flex-wrap mx-auto gap-y-4 items-center">
        {
            !isLoggedin &&
            <NavLink to="/login">
                <button className='py-[8px] bg-richblack-800 px-[12px] rounded-[8px] border border-richblack-700'>Log in</button>
            </NavLink>
        }
        {
            !isLoggedin &&
            <NavLink to="/signup">
                <button className='py-[8px] bg-richblack-800 px-[12px] rounded-[8px] border border-richblack-700'>Sign up</button>
            </NavLink>
        }

        {
            isLoggedin &&
            <NavLink to="/add">
                <button className='py-[8px] bg-richblack-800 px-[12px] rounded-[8px] border border-richblack-700'>Add</button>
            </NavLink>
        }
        {
            isLoggedin &&
            <NavLink to="/dashboard">
                <button className='py-[8px] bg-richblack-800 px-[12px] rounded-[8px] border border-richblack-700'>Dashboard</button>
            </NavLink>
        }
        {
            isLoggedin &&
            <NavLink to="/profile">
                <button className='py-[8px] bg-richblack-800 px-[12px] rounded-[8px] border border-richblack-700'>Profile</button>
            </NavLink>
        }
        {
            isLoggedin &&
            <Link to="/">
                <button onClick={
                    () => {
                        dispatch(logOutAuth());
                        toast.success("Logged Out!");
                    }
                } className='py-[8px] bg-richblack-800 px-[12px] rounded-[8px] border border-richblack-700'>Log Out</button>
            </Link>
        }
        {
            isAdmin &&
            <Link to="/admin">
                <button 
                className='py-[8px] bg-richblack-800 px-[12px] rounded-[8px] border border-richblack-700'>
                    Admin
                </button>
            </Link>
        }
     </div>

    </div>
  )
}

export default NavBar
