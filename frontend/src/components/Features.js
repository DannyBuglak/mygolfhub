// Features component that describes the features of the webpage on the home screen
import React from 'react';
import '../styles/Features.css';
import { Link } from 'react-router-dom';

const features = [
    { 
        title: 'Scorecards', 
        description: 'Keep track of all your scorecards from your rounds!',
        url: '/scorecards'
    },
    { 
        title: 'Goals', 
        description: 'Set goals for you to achieve on the course or at the range!',
        url: '/goals'
    },
    { 
        title: 'Bag', 
        description: 'Store your club information and distances!',
        url: '/bag'
    },
    { 
        title: 'About', 
        description: 'Learn about the website and the developer!',
        url: '/about'
    }
];

function Features() {
    return(
        <div className="features-container">
            {features.map((feature, index) => (
                <div key={index} className="feature-box">
                    <h3>
                        <Link to={feature.url}  style={{ textDecoration: 'none', color: 'inherit'}} >
                            {feature.title}
                        </Link>
                    </h3>
                    <p>{feature.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Features;
