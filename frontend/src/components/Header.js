import React from 'react';
import header_image from '..//assets/eagle_eye.jpg';
import '..//styles/Header.css';

function Header() {
    return (
      <header className="header">
        <img src={header_image} className="header-image" alt="Golf Course" />
        <div className="header-desc">Eagle Eye Golf Course, Bath, MI; Hole 14</div>
      </header>
    );
}

export default Header;