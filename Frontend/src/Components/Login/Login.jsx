import React, { useState} from 'react';
import "./login.css";
import { Link, useNavigate   } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';








const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // const [alertMessage, setAlertMessage] = useState('');
 

  const handleLogin = async (e) => {
    e.preventDefault(); 
try {
  const response = await axios.post('http://localhost:3000/api/login', { email, password });
  
  // localStorage.setItem('token', response.data.token);
  // setAlertMessage('Logged in successfully!');
  //  Set the token in a cookie instead of local storage
  const token = response.data.token;
  Cookies.set('token', token, { expires: 1/24/2 });
  alert('Logged in successfully!');
  navigate('/');
} catch (error) {
  console.error('Login error:', error);
  // setAlertMessage('Login failed: Incorrect username or password');
  alert('Login failed: Incorrect username or password');
}

  }

  return (
    
 <>
  <div className="sign-in">
  {/* {alertMessage && <div className="alert-message">{alertMessage}</div>} */}
      <h1>SIGN IN</h1>
      <div className="sign-in-btn-wrapper">
        <form className="email-pass" onSubmit={handleLogin}>
          <input type="email" name="email"  placeholder='email' required onChange={e => setEmail(e.target.value)}/>
          <input type="password" name="password" placeholder='password' required onChange={e => setPassword(e.target.value)}/>
          <input type="submit" value="SIGN IN" />
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