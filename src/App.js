
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import CreateUser from './components/CreateUser/CreateUser';
import CreateDiet from './components/CreatDiet/CreatDiet';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/create-diet" element={<CreateDiet />} />

      </Routes>
    </Router>
  );
}

export default App;

