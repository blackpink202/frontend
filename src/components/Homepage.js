import React from 'react';
import './Homepage.css'; // Import the stylesheet
import logo from '../assets/logo.png'; 
import searchIcon from '../assets/search-icon.png'; 
import profile from '../assets/profile.jpg';
function Homepage() {
  return (
    <div className="homepage-container">
      {/* Logo */}
      <img src={logo} alt="Logo" className="logo" />
      <img src={profile} alt="Profile" className="profile-picture" />

      {/* Search input field with search icon */}
      <div className="search-container">
        <input className='search'
          type="text"
          placeholder="Search"
        />
        <img src={searchIcon} alt="Search Icon" className="search-icon" />
      </div>
      <div className='welcome-t'>
        <h1>Welcome, Teacher!</h1>
      </div>
      <div className='horizontal-line'></div>
       {/* Rectangle */}
       <div className="rectangle"></div>
       <div className="rectangle2"></div>
       <div className="rectangle3"></div>
       <div className="myclass"><h1>My Classes</h1></div>
       <div className="dashboard"><h1>Dashboard</h1></div>
       <div className="rectangle4"></div>
       <div className="rectangle5"></div>
       <div className="today"></div>
       <div className='todclass'><h1>Today's Class</h1></div>


       <div className="recsched"></div>
       <div className="recdetails"></div>
       <div className="recnew"></div>
       <div className="recevent"></div>

       <div className='sched'><h1>CLASS SCHEDULE</h1><div className="sched-button"></div></div>
       <div className='facultydetails'><h1>FACULTY DETAILS</h1><div className="faculty-button"></div></div>
       <div className='createnew'><h1>CREATE NEW CLASS</h1><div className="createnew-button"></div></div>
       <div className='upcomevent'><h1>UPCOMING EVENTS</h1><div className="upcome-button"></div></div>

       <div className='track'><h1>TRACK</h1> <div className="attendance-button"><h3>ATTENDANCE SHEET</h3></div></div>
       <div className='analyze'><h1>ANALYZE</h1> <div className="analyze-button"><h3>REPORT</h3></div></div>
       <div className='manage'><h1>MANAGE</h1> <div className="manage-button"><h3>TEACHER</h3></div></div>
    </div>
  );
}

export default Homepage;
