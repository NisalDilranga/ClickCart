
import { FaUserAlt, FaShoppingCart, FaSearch ,  FaHome } from "react-icons/fa";
import { Link,  useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import React, { useEffect } from 'react';


function isAuthenticated() {
  // return !!localStorage.getItem('token');
  return !!Cookies.get('token');
}



const Nav = () => {
  const navigate = useNavigate();

  const handleUserIconClick = () => {
    if (isAuthenticated()) {
      navigate('/about'); // Update this to your user profile route
    } else {
      navigate('/login');
    }
  };
  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   navigate('/login');
  // };
  const handleLogout = () => {
    Cookies.remove('token');
    navigate('/login');
  };

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
            {/* <Link to='/login' className="icon_l" >
            <FaUserAlt className="i" />
            </Link> */}
            <div onClick={handleUserIconClick} className="icon_l">
              <FaUserAlt className="i" />
            </div>
           
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
