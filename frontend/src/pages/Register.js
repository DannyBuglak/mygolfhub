import React, { useState } from 'react';
import { register } from '../services/api';
import '../styles/Register.css' 

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await register(username, password, confirmPassword);
            console.log('Registration successful', response);
        } catch (error) {
            setError('Registration failed. Try again.');
        }
    };



    return (
        <div className="register-div">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleRegister}>
                <label>
                Email:
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                </label>
                <label>
                Password:
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </label>
                <label>
                Confirm Password:
                <input
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                </label>
                {error && <p className="error">{error}</p>}
                <button type="submit" className="register-btn">Register</button>
            </form>
        </div>
    );
}

export default Register;
