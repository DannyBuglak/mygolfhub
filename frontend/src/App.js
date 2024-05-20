import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './/pages/Home';
import Navbar from './/components/NavBar';
import Header from './/components/Header';

import './/styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Home />
      </div>
    </Router>
  );
}

export default App;
