import React, { useState } from 'react';
import axios from 'axios';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '60vh', // Adjust the height as needed
};

const boxStyle = {
  width: '500px',
  backgroundColor: 'white',
  boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
  padding: '20px',

};

const inputStyle = {
  width: '100%' // This will make the input take the full width of its parent
};


const SendEmail = () => {
  const [email, setEmail] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/forgot-password', { email });
      // Display success message
      alert('success ');
      setAlertMessage('Please Check Your Email to accses RESET LINK......');
    } catch (error) {
      // Handle errors
      alert('unsuccess ');
      setAlertMessage('Enter Valid Email...!');
    }
  };
  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h1 className="mb-5">Enter Your Email</h1>

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" className="form-control" style={inputStyle}  onChange={(e) => setEmail(e.target.value)}  />
          {alertMessage && <div className="alert-message" style={{ color: 'red' }}>{alertMessage}</div>}
        <button  type="submit" className="btn btn-primary" style={{ marginTop: '20px' }}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default SendEmail;
