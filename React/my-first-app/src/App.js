import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import AuthLayout from './layouts/Auth';
import DashboardLayout from './layouts/Dashboard';
import Contact from './pages/Dashboard/Contact';
import Home from './pages/Dashboard/Home';
import Login from './pages/Auth/Login';
import UserDetail from './pages/Dashboard/UserDetail';
import Users from './pages/Dashboard/Users';
import Register from './pages/Auth/Register';
import Error404 from './pages/Error404';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserDetail />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
