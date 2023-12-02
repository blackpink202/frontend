import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png'; 
import profile1 from '../assets/profile1.jpg';
import './Attendance.css'; 
/*import axios from 'axios';*/

function Attendance() {
  return (
    <div className="attendance-container">
      <img src={logo} alt="Logo" className="logo" />
      <img src={profile1} alt="Profile" className="prof-picture" />
      <div className='horizontal'></div>
      <div className='horizontal1'></div>
      <h1 className='attendancesheet'>Attendance Sheet</h1>
    
    </div>
  );
}

export default Attendance;
