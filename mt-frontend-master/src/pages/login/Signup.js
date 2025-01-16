import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

// Import Bootstrap for styling
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Signup() {
    let navigate = useNavigate();

    const [user, setUser] = useState({
        userName: "", userEmail: "", userFirstName: "", userLastName: "", userHashedPassword: ""
    });

    const { userName, userEmail, userFirstName, userLastName, userHashedPassword } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/users/signup", user);
        navigate("/");
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#f4f7fc' }}>
            <div className="card shadow-lg border-0 p-5 w-100" style={{ maxWidth: '500px', borderRadius: '12px' }}>
                <h2 className="text-center text-primary mb-4">Register User</h2>

                <form onSubmit={(e) => onSubmit(e)}>
                    {/* User Name */}
                    <div className="mb-4">
                        <label htmlFor="userName" className="form-label">Username:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter username"
                            name="userName"
                            value={userName}
                            onChange={(e) => onInputChange(e)}
                            required
                        />
                    </div>

                    {/* User Email */}
                    <div className="mb-4">
                        <label htmlFor="userEmail" className="form-label">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            name="userEmail"
                            value={userEmail}
                            onChange={(e) => onInputChange(e)}
                            required
                        />
                    </div>

                    {/* User First Name */}
                    <div className="mb-4">
                        <label htmlFor="userFirstName" className="form-label">First Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter first name"
                            name="userFirstName"
                            value={userFirstName}
                            onChange={(e) => onInputChange(e)}
                            required
                        />
                    </div>

                    {/* User Last Name */}
                    <div className="mb-4">
                        <label htmlFor="userLastName" className="form-label">Last Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter last name"
                            name="userLastName"
                            value={userLastName}
                            onChange={(e) => onInputChange(e)}
                            required
                        />
                    </div>

                    {/* User Password */}
                    <div className="mb-4">
                        <label htmlFor="userHashedPassword" className="form-label">Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            name="userHashedPassword"
                            value={userHashedPassword}
                            onChange={(e) => onInputChange(e)}
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary w-100 py-2 mb-3">Register</button>

                    {/* Cancel Link */}
                    <div className="text-center">
                        <p className="text-muted">Already have an account? <Link to="/" className="text-decoration-none text-primary">Login here</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}