import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './global/global.css'

import StudentSidebar from './components/StudentSidebar';


import Login from './views/LoginPage';
import ChooseRole from './views/ChooseRolePage';
import CollegeRegister from './views/CollegeRegisterPage';
import StudentRegister from './views/StudentRegisterPage';
import StudentProfile from './views/StudentProfilePage';
import StudentDashboard from './views/StudentDashboardPage';
import StudentTrails from './views/StudentTrailsPage';
import CollegeTrails from './views/CollegeTrailsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/choose-role' element={<ChooseRole />}/>
        <Route path="/college-register" element={<CollegeRegister />} />
        <Route path="/student-register" element={<StudentRegister />} />
      </Routes>

      <StudentSidebar>
        <Routes>
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/student-trails" element={<StudentTrails />} />
          <Route path="/student-college-trails" element={<CollegeTrails />} />
          <Route path="/student-profile" element={<StudentProfile />} />
        </Routes>
      </StudentSidebar>
      
      {/* <CollegeSidebar>
        <Routes>
          <Route path="/college-dashboard" element={<CollegeDashboard />} />
          <Route path="/college-warnings" element={<CollegeWarnings />} />
          <Route path="/college-trails" element={<CollegeTrails />} />
          <Route path="/college-profile" element={<CollegeProfile />} />
        </Routes>
      </CollegeSidebar> */}
      
  </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
