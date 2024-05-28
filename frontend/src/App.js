import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Component Imports
import Navbar from './/components/NavBar';
import Header from './/components/Header';

// Page Imports
import Home from './/pages/Home'; 
import Scorecards from './/pages/Scorecards'; 
import Goals from './/pages/Goals'; 
import Bag from './/pages/Bag'; 
import About from './/pages/About'; 
import Login from './/pages/Login'; 
import Register from './/pages/Register'; 

import './/styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scorecards" element={<Scorecards />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        
      </div>
      
    </Router>
  );
}

export default App;
