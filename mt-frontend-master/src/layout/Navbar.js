import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

// Importing Bootstrap's necessary JS and CSS for dropdown functionality
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Navbar() {
    const navigate = useNavigate();

    // Logout functionality
    const logout = async () => {
        Cookies.remove("auth");
        navigate("/");
    };

    return (
        <header>
            {/* Navbar structure */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
                <div className="container-fluid">
                    {/* Navbar brand */}
                    <Link className="navbar-brand" to="/">
                        <img
                            src="logo.png" // Optional: Add your app logo here
                            alt="mTracker Logo"
                            width="30"
                            height="30"
                            className="d-inline-block align-text-top"
                        />
                        mTracker
                    </Link>

                    {/* Hamburger toggle for mobile screens */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar links */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            {/* General links */}
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/features">
                                    Features
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/documentation">
                                    Documentation
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/download">
                                    Download
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">
                                    Blog
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">
                                    Login
                                </Link>
                            </li>

                            {/* Webapp Dropdown */}
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarWebappDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Webapp
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarWebappDropdown">
                                    <li>
                                        <Link className="dropdown-item" to="webapp/accounts">
                                            Accounts
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="webapp/budget">
                                            Budget
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="webapp/transactions">
                                            Transactions
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <button className="dropdown-item" onClick={logout}>
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Optional custom CSS for navbar and hover effects */}
            <style>
                {`
          /* Body and general font styling */
          body {
            font-family: 'Roboto', sans-serif;
            background-color: #f4f7f6;
          }

          /* Navbar styles */
          .navbar {
            background-color: #2a3d66;
            border-bottom: 1px solid #e2e2e2;
          }

          .navbar-nav .nav-link {
            color: #fff !important;
            transition: color 0.3s ease;
          }

          .navbar-nav .nav-link:hover,
          .navbar-nav .nav-item:hover .nav-link {
            color: #ffcc00 !important;
          }

          .navbar-brand img {
            border-radius: 50%;
          }

          /* Dropdown item hover effect */
          .dropdown-item:hover {
            background-color: #ffcc00;
            color: #fff;
          }

          /* Customize dropdown toggle */
          .dropdown-toggle {
            color: #fff !important;
            border: none;
            background-color: transparent;
          }

          /* Responsive navbar styling for mobile screens */
          .navbar-toggler-icon {
            background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D"http%3A//www.w3.org/2000/svg"%20width%3D"30"%20height%3D"30"%20viewBox%3D"0%200%2030%2030"%3E%3Cpath%20fill%3D"none"%20stroke%3D"%23ffffff"%20stroke-width%3D"2"%20d%3D"M0%200h30v30H0z"%3E%3C/path%3E%3C/svg%3E');
          }
        `}
            </style>
        </header>
    );
}
