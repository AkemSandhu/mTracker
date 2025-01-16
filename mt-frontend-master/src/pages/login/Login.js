import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie"; // Import Cookies

// Importing Bootstrap for styling
import 'bootstrap/dist/css/bootstrap.min.css';

function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setErrorMessage(''); // Clear previous error messages

            // Send login request to server
            const response = await axios.get(`http://localhost:8080/api/users/check/${username}/${password}`);

            // If login successful, redirect to MainPage
            if (response.data > 0) {
                const userID = response.data;
                const userData = { userID, username, password };
                const expirationTime = new Date(new Date().getTime() + 60000); // Session expiration time
                sessionStorage.setItem('auth', JSON.stringify(userData));
                Cookies.set('auth', JSON.stringify(userData), { expires: expirationTime });
                navigate('/webapp');
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('Your Username and Password are incorrect.');
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#f4f7fc' }}>
            <div className="card shadow-lg border-0 p-5 w-100" style={{ maxWidth: '400px', borderRadius: '12px' }}>
                <h2 className="text-center text-primary mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="form-label">Username:</label>
                        <input
                            type="text"
                            id="username"
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 py-2 mb-3">Login</button>
                    {errorMessage && (
                        <div className="alert alert-danger text-center" role="alert">
                            {errorMessage}
                        </div>
                    )}
                </form>
                <div className="text-center">
                    <p className="text-muted">Don't have an account? <a href="/register" className="text-decoration-none text-primary">Sign up here</a></p>
                </div>
            </div>
        </div>
    );
}

export default Login;