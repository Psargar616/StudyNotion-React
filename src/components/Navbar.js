import React from "react";
import logo from "../assets/Logo.svg";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
  // accessing props
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] mx-auto py-4  ">
      <NavLink to="/">
        <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
      </NavLink>

      <nav>
        <ul className="flex gap-x-6  text-white ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/">Contact</NavLink>
          </li>
        </ul>
      </nav>

      {/* Login - SignUp - LogOut - Dashboard */}
      {/* isLoggedIn is used in decision to display buttons*/}
      {/* !isLoggedIn  => user is not logged in */}
      <div className="flex items-center gap-x-4  ">
        {!isLoggedIn && (
          <NavLink to="/login">
            <button
             
              className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] border-richblack-700 rounded-[8px]"
            >
              Login
            </button>
          </NavLink>
        )}
        {!isLoggedIn && (
          <NavLink to="/signup">
            <button
             className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] border-richblack-700 rounded-[8px]"
            >Sign Up</button>
          </NavLink>
        )}
        {isLoggedIn && (
          <NavLink to="/">
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}

              className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] border-richblack-700 rounded-[8px]"
            >
              Log Out
            </button>
          </NavLink>
        )}
        {isLoggedIn && (
          <NavLink to="/dashboard">
            <button
             className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] border-richblack-700 rounded-[8px]"
            >Dashboard</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
