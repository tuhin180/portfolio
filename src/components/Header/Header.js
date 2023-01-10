import React from "react";
import { Link } from "react-router-dom";

import navimg1 from "../../assets/image/ttttttttt.png";
import Toggle from "../DarkMode.js/Toggle";

const Header = () => {
  const navitem = (
    <React.Fragment>
      <li>
        <Link to="/" className="uppercase hover:font-bold hover:text-primary">
          Home
        </Link>
      </li>
      <li>
        <a
          href="/#about"
          className="uppercase hover:font-bold hover:text-primary"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="/#projects"
          className="uppercase hover:font-bold hover:text-primary"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="/#contact"
          className="uppercase hover:font-bold hover:text-primary "
        >
          Contact
        </a>
        <Toggle />
      </li>
    </React.Fragment>
  );
  return (
    <div className="navbar bg-white dark:bg-black fixed top-0 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 dark:bg-black dark:text-white rounded-box w-52"
          >
            {navitem}
          </ul>
        </div>
        <img
          className="w-16 ml-3 mr-3"
          style={{ clipPath: "circle(50% at 50% 50%)" }}
          src={navimg1}
          alt=""
        />
        <Link
          to="/"
          className=" uppercase  text-xl  font-bold hover:text-primary  dark:text-white dark:hover:text-primary"
        >
          MD.Tuhin Hossain
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0 mr-10  dark:text-white">
          {navitem}
        </ul>
        {/* <Toggle /> */}
      </div>
    </div>
  );
};

export default Header;
