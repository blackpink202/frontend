import React from 'react';
import './Home.css'; // Import the stylesheet
import logo from '../assets/logo.png'; 
import teach from '../assets/teach.png'; 
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className="homepage-container">
      {/* Logo */}
      <img src={logo} alt="Logo" className="logo" />

      <div className='home-button'>Home</div>
      <div className='features-button'>Features</div>
      <div className='about-button'>About Us</div>
      <div className='login-button'>Login</div>
      <div className='signup-button'>Signup</div>
      <h1 className='cit'>CIT</h1>
      <h1 className='checker'>CHECKER:</h1> 
      <h1 className='sub'>The ultimate</h1>
      <h1 className='plat'>Logging Platform for Educators and Students</h1>
      <p className='mean'>Empowering educators to effectively manage student attendance, and </p>
      <p className='allow'> allowing students to keep track of their attendance effortlessly.</p>
      <Link to= '/Login'className='start-button'>Get Started </Link>
      <img src={teach} alt="Teach" className="teach" />
    </div>
  );
}

export default Homepage;
