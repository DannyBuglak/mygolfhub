import React from 'react';

import '../styles/About.css'

function About() {
    return (
        <div className="about-container">
            <div className="about-section">
                <h2>About the Website</h2>
                <p>Information about the website</p>
            </div>
            <div className="about-section">
                <h2>About Me</h2>
                <p>Information about me</p>
            </div>
        </div>
    );
}

export default About;