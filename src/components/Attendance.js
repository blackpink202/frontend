import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import profile1 from '../assets/profile1.jpg';
import './Attendance.css';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

function Attendance() {
  const [subjectValue, setSubjectValue] = useState('');
  const [sectionValue, setSectionValue] = useState('');
  const [subjectOptions, setSubjectOptions] = useState([]);
  const [sectionOptions, setSectionOptions] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch data from your Postman API for subjects
    fetch('http://localhost:8080/class/getAllClasses')
      .then(response => response.json())
      .then(data => setSubjectOptions(data))
      .catch(error => console.error('Error fetching subjects:', error));

    // Fetch data from your Postman API for sections
    fetch('http://localhost:8080/class/getAllClasses')
      .then(response => response.json())
      .then(data => setSectionOptions(data))
      .catch(error => console.error('Error fetching sections:', error));
  }, []);

  const handleSubjectChange = (event) => {
    setSubjectValue(event.target.value);
  };
  const handleSectionChange = (event) => {
    setSectionValue(event.target.value);
  };

  const handleGenerateClick = () => {
    // Make an API request to fetch students based on subjectValue and sectionValue
    fetch(`http://localhost:8080/student/getAllStudents`)
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error fetching students:', error));
  };

  return (
    <div className="attendance-container">
      {/* Generate Button */}
      <button className='generate' onClick={handleGenerateClick}>
        Generate
        {students.map(student => (
  <div key={student.tid}>{student.fname}</div>
))}
      </button>

      <img src={logo} alt="Logo" className="logo" />
      <img src={profile1} alt="Profile" className="prof-picture" />
      <div className='horizontal'></div>
      <div className='horizontal1'></div>
      <h1 className='attendancesheet'>Attendance Sheet</h1>
      <div className='horizontal2'></div>

      {/* Subject Search */}
      <TextField
        className='search-sub'
        id="search-sub"
        label="Subject"
        variant="outlined"
        value={subjectValue}
        onChange={handleSubjectChange}
        select
        style={{
          background: 'white',
          width: '160px',
          marginLeft: '-955px',
          borderRadius: '10px',
          marginTop: '-65px',
          color: 'black', // Set a prominent color for better visibility
        }}
      >
        {subjectOptions.map((option) => (
          <MenuItem key={option.sid} value={option.sid}>
            {option.code}
          </MenuItem>
        ))}
      </TextField>

      {/* Section Search */}
      <TextField
        className='search-sec'
        id="search-sub"
        label="Section"
        variant="outlined"
        value={sectionValue}
        onChange={handleSectionChange}
        select
        style={{
          background: 'white',
          width: '160px',
          marginLeft: '-600px',
          borderRadius: '10px',
          marginTop: '-57px',
          color: 'black', // Set a prominent color for better visibility
        }}
      >
        {sectionOptions.map((option) => (
          <MenuItem key={option.sid} value={option.sid}>
            {option.section}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
}

export default Attendance;
