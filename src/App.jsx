
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import CreateUser from './components/CreateUser/CreateUser';
import CreateDiet from './components/CreatDiet/CreatDiet';
import Home from './components/Home';
import CalculeImc from './components/CalculeImc/CalculeImc';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/create-diet" element={<CreateDiet />} />
        <Route path="/calcule-imc" element={<CalculeImc />} />
      </Routes>
    </Router>
  );
}

export default App;

