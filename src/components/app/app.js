import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Landing from '../landing/landing';
import Login from '../login/login';
import Signup from '../signup/signup';
import Main from '../main/main';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="main" element={<Main />} />
    </Routes>
  </BrowserRouter>
);

export default App;
