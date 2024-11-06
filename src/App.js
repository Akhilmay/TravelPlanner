import React from 'react';
import { BrowserRouter as Router, Route,Switch ,Routes, Link, Redirect } from 'react-router-dom';
import Login from './Views/login.js';
import Register from './Views/Register.js';
import UserHome from './Views/UserHome.js';


function App() {
 
  return (   
    
    <div>
    <Routes>
    <Route index element={<Login/>} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/userHome" element={<UserHome />} />
  </Routes>
  </div> 
  );
}

export default App;
