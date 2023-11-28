import React, { useEffect, useState } from 'react';
import './Attendance.css';
import axios from 'axios';

function Attendance() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch students when the component mounts
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      console.log('Fetching students...');
      const response = await axios.get('http://localhost:8080/student/getAllStudents');
      console.log('Students response:', response.data);
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  return (
    <div className="homepage-container">
      {/* ... (your existing code) */}

      {/* Display the list of students */}
      <div className='students-list'>
        <h2>Students:</h2>
        <ul>
          {students.map(student => (
            <li key={student.sid}>{student.fname} {student.lname}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Attendance;
