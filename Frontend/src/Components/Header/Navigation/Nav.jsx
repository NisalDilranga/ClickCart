import React from "react";
import { FaUserAlt, FaShoppingCart, FaSearch ,  FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <>
      <header>
        <div className="search_navbar">
          <div className="logo">
            <h1>ClickCart</h1>
          </div>
          <div className="search">
            <input type="search" placeholder="  Search . . ."></input>
            <FaSearch className="icons" />
          </div>
          <div className="icon">
          {/* <div className="icon_l">
              <FaHome className="i" />
            </div> */}
            <Link to='/' className="icon_l" >
            <FaHome className="i" />
            </Link>
            {/* <div className="icon_l">
              <FaUserAlt className="i" />
            </div> */}
            <Link to='/login' className="icon_l" >
            <FaUserAlt className="i" />
            </Link>
           
            <div className="icon_l">
              <FaShoppingCart className="i" />
              <span>0</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
