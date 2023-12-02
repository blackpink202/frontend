import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Attendance from './components/Attendance';  // Update the import path based on your project structure
import TeacherHP from './components/TeacherHP';
import Homepage from './components/Homepage';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <Routes>
       <Route path="/Homepage" element={<Homepage />} />
       <Route path="/Login" element={<Login />} />

        <Route path="/Teacher" element={<TeacherHP />} />
        <Route path="/Attendance" element={<Attendance />} />
      </Routes>
    </Router>
  );
}

export default App;