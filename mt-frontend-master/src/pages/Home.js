import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Font Awesome icons
import { faDollarSign, faChartLine, faFileAlt } from "@fortawesome/free-solid-svg-icons"; // Icons for the features
import "../style.css"
export default function Home() {
    return (

        <main>
            {/* Hero Section with Gradient Background */}
            <section
                className="hero-section text-center py-5"
                style={{
                    background: "linear-gradient(45deg, #3498db, #8e44ad)", // gradient background
                    color: "white",
                }}
            >
                <div className="container">
                    <h2 className="display-4 mb-4">Your Financial Journey Starts Here</h2>
                    <p className="lead mb-5">
                        Track your expenses, manage your budget, and gain insights effortlessly with mTracker.
                    </p>

                    {/* Call-to-Action Buttons */}
                    <div className="cta-buttons">
                        <a href="/webapp" className="btn btn-light btn-lg me-3">
                            Launch Webapp
                        </a>
                        <a href="/features" className="btn btn-outline-light btn-lg">
                            Learn More
                        </a>
                    </div>
                </div>
            </section>

            {/* Features Section with Icons */}
            <section className="features-section py-5 bg-light">
                <div className="container">
                    <h3 className="text-center mb-4">Why Choose mTracker?</h3>
                    <div className="row text-center">
                        {/* Feature 1: Expense Tracking */}
                        <div className="col-md-4 mb-4">
                            <div className="feature-box shadow-lg rounded p-4">
                                <FontAwesomeIcon icon={faDollarSign} size="3x" color="#3498db"/>
                                <h5 className="feature-title mt-3">Expense Tracking</h5>
                                <p>
                                    Effortlessly track your expenses and gain insight into your spending habits.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2: Budget Management */}
                        <div className="col-md-4 mb-4">
                            <div className="feature-box shadow-lg rounded p-4">
                                <FontAwesomeIcon icon={faChartLine} size="3x" color="#8e44ad"/>
                                <h5 className="feature-title mt-3">Budget Management</h5>
                                <p>
                                    Set and track budgets to make sure you stay on top of your finances.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3: Insightful Reports */}
                        <div className="col-md-4 mb-4">
                            <div className="feature-box shadow-lg rounded p-4">
                                <FontAwesomeIcon icon={faFileAlt} size="3x" color="#2ecc71"/>
                                <h5 className="feature-title mt-3">Insightful Reports</h5>
                                <p>
                                    Get detailed reports and insights into your financial situation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section with Primary Color */}
            <section className="cta-section py-5 bg-primary text-white">
                <div className="container text-center">
                    <h3 className="mb-4">Ready to Take Control of Your Finances?</h3>
                    <a href="/webapp" className="btn btn-light btn-lg">
                        Start Now
                    </a>
                </div>
            </section>
        </main>
    );
}