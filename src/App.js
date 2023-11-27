import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Attendance from './components/Attendance';  // Update the import path based on your project structure


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Attendance" element={<Attendance />} />
      </Routes>
    </Router>
  );
}

export default App;