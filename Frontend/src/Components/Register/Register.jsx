import React from 'react';
import { Link } from 'react-router-dom';
import "./register.css";
const Register = () => {
  return (
    <>
    
    <div className="sign-in">
      SIGN UP
      <div className="sign-in-btn-wrapper">
        <form className="email-pass" onSubmit={""} id="loginDocForm">
          <input type="text" name="userName" placeholder='name' required />
          <input type="email" name="userEmail"  placeholder='email' required />
          <input
            type="password"
            name="userPassword"
            placeholder="Password"
            required
            // onInput={(e) => {
            //   if (e.target.value.length < 6) {
            //     e.target.setCustomValidity('Password must be at least 6 characters');
            //   } else {
            //     e.target.setCustomValidity('');
            //   }
            // }}
          />
          <input type="number" name="userPhone" placeholder='phone' required />
          <button className="btn-buy-black">SIGN UP</button>
        </form>
      </div>
      <div className="hr-tag"></div>
      <div className="policies">
        <Link to="/" className="login-policy-link">
          PRIVACY POLICY
        </Link>
        <Link to="/" className="login-policy-link">
          TERMS AND CONDITIONS
        </Link>
      </div>
    </div>
    
    </>
  )
}

export default Register