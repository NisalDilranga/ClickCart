import React from 'react';
import "./login.css";
import { Link } from 'react-router-dom';



const Login = () => {
  return (
    
 <>
  <div className="sign-in">
      <h1>SIGN IN</h1>
      <div className="sign-in-btn-wrapper">
        <form className="email-pass">
          <input type="email" name="email"  placeholder='email' required onChange={e => setLoginEmail(e.target.value)}/>
          <input type="password" name="password" placeholder='password' required onChange={e => setLoginPass(e.target.value)}/>
          <input type="submit" value="SIGN IN" onClick={""}/>
        </form>
       </div>
       <div className="signUp">
        Don't have an account? <Link className='signup-btn' to={"/Register"}>Sign Up</Link>
      </div>
      <div className="signUp">
        <Link className='signup-btn' to={"/"}>Forgot Password?</Link>
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

export default Login