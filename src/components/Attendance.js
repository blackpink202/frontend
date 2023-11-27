import React from 'react';
import './Attendance.css'; // Import the stylesheet
import logo from '../assets/logo.png'; 
import profile from '../assets/profile.jpg';

function Attendance() {
  return (
    <div className="homepage-container">
      {/* Logo */}
      <img src={logo} alt="Logo" className="logo" />
      <img src={profile} alt="Profile" className="profile-picture" />

   
      <div className='horizontal'></div>
      <div className='attendancesheet'><h1>ATTENDANCE SHEET</h1></div>
      <div className='horizontal1'></div>
      
    </div>
  );
}

export default Attendance;
