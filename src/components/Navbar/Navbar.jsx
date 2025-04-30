import React, { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { authContext } from "../mainLayout/MainLayout";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { handleSignOut } = useContext(authContext);
 

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/blogs"}>Blogs</NavLink>
      </li>
      <li>
        <NavLink to={"/profile"}>Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-blue-500">Authentication</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <button
          onClick={() => navigate("/login")}
          className={`py-1 px-4 bg-gray-200 cursor-pointer rounded-md mr-3 ${
            pathname === "/login" ? "text-blue-500" : ""
          }`}
        >
          Log In
        </button>
        <button
          onClick={() => navigate("/signup")}
          className={`py-1 px-4 bg-gray-200 rounded-md cursor-pointer ${
            pathname === "/signup" ? "text-red-500 " : ""
          }`}
        >
          Sign Up
        </button>
        <button
          onClick={handleSignOut}
          className="py-1 px-4 ml-4 bg-gray-200 rounded-md cursor-pointer"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
