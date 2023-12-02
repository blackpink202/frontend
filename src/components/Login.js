import React, { useEffect } from 'react';
import { TextField} from "@mui/material";
import './Login.css'; // Import the stylesheet
import logo from '../assets/logo.png'; 
import login_pic from '../assets/login_pic.png'; 
import facebook from '../assets/facebook.png'; 
import google from '../assets/google.png';
import { Link } from 'react-router-dom';


function Login() {
    useEffect(() => {
        // Set overflow to hidden when the component mounts
        document.body.style.overflow = 'hidden';
    
        // Clean up function to remove the style when the component unmounts
        return () => {
          document.body.style.overflow = '';
        };
      }, []);
  return (
    <div className="login-container">
      {/* Logo */}
      <img src={logo} alt="Logo" className="logo" />
      <img src={login_pic} alt="logopic" className="login_pic" />
      <div className='rightrec'></div>
      <p className='welcome'>Welcome Back</p>
      <h2 className='logcon'>Login to continue</h2>
      <p className='connect'>connect with</p>
      <img src={facebook} alt="Facebook" className="facebook" />
      <img src={google} alt="Google" className="google" />
      <hr className="line"></hr>
      <p className='or'>or</p>
      <hr className="line2"></hr>

     <p className='email'>Email:</p>
       {/* Email TextField */}
       <TextField
        id="email"
        label="Email"
        variant="outlined"
        className="email-input"/>

        <p className='password'>Password:</p>
       {/* Email TextField */}
       <TextField
        id="password"
        label="Password"
        variant="outlined"
        className="password-input"/>

    <p className='forgot'>Forgot Password?</p>
    <Link to='/Teacher' className='lgin-button' style={{ textDecoration: 'none' }}>
  Login
</Link>


    <p className='doyou'>Do you have an account?</p>
    <p className='reg'>Register today</p>

     
    </div>
  );
}

export default Login