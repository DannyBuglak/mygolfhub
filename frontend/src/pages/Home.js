import React, { useEffect, useState } from 'react';
import Features from '../components/Features';
import logo from '..//assets/MyGolfHub_transparent2.png';
import { fetchUser } from '../services/api.js';

import '../styles/Home.css'

function Home() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const getUsername = async() => {
      const name = await fetchUser();
      console.log(name);
      if (name) {
        setUsername(name);
      }
    };

    getUsername();
  }, []);


  return (
    <div className="introduction">
      <h2 className="welcome-msg">Welcome{username ? `, ${username}` : ''}!</h2>
      <img src={logo} className="app-logo-home" alt="MyGolfHub Logo" />
      <p className="short-desc">Track your golf statistics easily and efficiently!</p>
      <h5 className="feature-desc">MyGolfHub offers many features:</h5>
      <Features /> 
    </div>
  );
}

export default Home;
