import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Landing from '../landing/landing';
import Login from '../login/login';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="login" element={<Login />} />
    </Routes>    
  </BrowserRouter>
);

export default App;
