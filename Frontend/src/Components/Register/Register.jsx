
import { Link, useNavigate } from 'react-router-dom';
import "./register.css";
import axios from 'axios';
import { useState } from 'react';
const Register = () => {

  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [number, setNumber] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission


    const formData = {
     
      name,
      email,
      password,
      number
    };
    console.log(formData);
    try {
      await axios.post('http://localhost:3000/api/register',formData );
      alert('Registration successful!');
      navigate('/login'); // Redirect to login after successful registration
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed: ' + error.message);
    }
  };

  return (
    <>
    
    <div className="sign-in">
      SIGN UP
      <div className="sign-in-btn-wrapper">
        <form className="email-pass" onSubmit={handleSubmit} id="loginDocForm">
          <input type="text"
           value={name} 
           placeholder='name'
           onChange={(e)=>{setName(e.target.value)}} 
           required />
          <input type="email" name="userEmail"  placeholder='email' onChange={(e)=>{setEmail(e.target.value)}} required />
          <input
            type="password"
            name="userPassword"
            placeholder="Password"
            onChange={(e)=>{setPassword(e.target.value)}}
            required
            onInput={(e) => {
              if (e.target.value.length < 6) {
                e.target.setCustomValidity('Password must be at least 6 characters');
              } else {
                e.target.setCustomValidity('');
              }
            }}
          />
          <input type="number"
           name="userPhone" 
           placeholder='phone' 
           onChange={(e)=>{setNumber(e.target.value)}} 
           onInput={(e) => {
            const regex = /^07\d{8}$/; // Regular expression to match a number starting with '07' followed by 8 digits
            if (!regex.test(e.target.value)) {
              e.target.setCustomValidity('Phone number must start with 07 and be 10 digits long.');
            } else {
              e.target.setCustomValidity('');
            }
          }}
           required />
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