import React from 'react';
import UserRegister from './Components/UserRegister';
import UserLogin from './Components/UserLogin';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import UserPassResetReq from './Components/UserPassResetReq';
import UserPassReset from './Components/UserPassReset';

const App = () => {
  return (
    <div className="app-container" style={{ backgroundColor: '#f0f0f0' }}>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<UserRegister />} />
      <Route path='/login' element={<UserLogin />} />
      <Route path='/forgot-password' element={<UserPassResetReq />} />
      <Route path='/reset-password/:token' element={<UserPassReset />} />
     </Routes>
     </BrowserRouter>

    </div>
  );
};

export default App;