import React, { useState } from 'react';
import { register } from '../services/api';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css' 

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await register(username, password, confirmPassword);
            console.log('Registration successful', response);
            setSuccess(true);
            setError(null);
        } catch (error) {
            setError('Registration failed. This email may already exist. Try again.');
            setSuccess(false);
        }
    };


    const handleLoginRedirect = () => {
        navigate('/login');
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
                {success && (
                    <p className="success">
                        Registration Success!{' '}
                        <button onClick={handleLoginRedirect} className="login-link">Go to Login</button>
                    </p>
                )}
                <button type="submit" className="register-btn">Register</button>
            </form>
        </div>
    );
}

export default Register;
