import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {

    return ( 
        <nav className='flex font-main justify-between bg-dark px-5 py-4 text-white 0'>
            <h1 className="hidden">Primary navigation</h1>
            <NavLink to="/home"  className={({ isActive }) => 
                [isActive ? "py-1 font-bold text-2xl text-emerald-500" : "py-1 text-2xl hover:text-emerald-500 duration-150"]}
                >
            Interacting with Dark Pattern <FontAwesomeIcon icon="ghost" />
            </NavLink>
            <NavLink to="/links"  className={({ isActive }) => 
                [isActive ? "p-1 font-bold text-lg text-emerald-500 underline" : "p-1 text-lg hover:underline hover:text-emerald-500 duration-150"]}
                >
            Learn More
            </NavLink>
        </nav>
    );
};

export default NavBar;