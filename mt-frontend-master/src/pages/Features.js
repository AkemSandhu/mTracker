import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // FontAwesome Icons
import { faQuoteLeft, faCheckCircle } from "@fortawesome/free-solid-svg-icons"; // Quote and Check Circle icons

export default function Features() {
    return (
        <main className="container my-5">
            {/* Feature Gallery Section */}
            <section className="mb-5">
                <h2 className="text-center mb-4">Feature Gallery</h2>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="card shadow-sm">
                            <img
                                src={require("../images/004_transactions.png")}
                                alt="Transaction Monitoring"
                                className="card-img-top"
                                style={{ maxHeight: "300px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center">
                                <h3 className="card-title">Transaction Monitoring</h3>
                                <p className="card-text">Monitor your spending as it happens by recording transactions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="card shadow-sm">
                            <img
                                src={require("../images/006_tracker.png")}
                                alt="Simple Tracking"
                                className="card-img-top"
                                style={{ maxHeight: "300px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center">
                                <h3 className="card-title">Simple Tracking</h3>
                                <p className="card-text">View all your financial information in a concise and organized page.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* User Testimonials Section */}
            <section className="mb-5">
                <h2 className="text-center mb-4">User Testimonials</h2>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <FontAwesomeIcon icon={faQuoteLeft} size="2x" className="text-primary mb-3" />
                                <p className="card-text">
                                    "mTracker changed the way I manage my finances. It's intuitive and effective!"
                                </p>
                                <footer className="blockquote-footer">
                                    - ChatGPT
                                </footer>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <FontAwesomeIcon icon={faQuoteLeft} size="2x" className="text-primary mb-3" />
                                <p className="card-text">
                                    "Tracker feature is a game changer. Highly recommended!"
                                </p>
                                <footer className="blockquote-footer">
                                    - ChatGPT (2 days later)
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Changelog Section */}
            <section className="mb-5">
                <h2 className="text-center mb-4">Changelog</h2>
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Version 1.0</strong> - Initial release
                        <FontAwesomeIcon icon={faCheckCircle} className="text-success" />
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Version 1.1</strong> - Apache web version (not functional)
                        <FontAwesomeIcon icon={faCheckCircle} className="text-warning" />
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Version 1.2</strong> - Tomcat migration
                        <FontAwesomeIcon icon={faCheckCircle} className="text-info" />
                    </li>
                </ul>
            </section>

            {/* Roadmap Section */}
            <section className="mb-5">
                <h2 className="text-center mb-4">Roadmap</h2>
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Q1 2025</strong> - Full Web Migration
                        <FontAwesomeIcon icon={faCheckCircle} className="text-primary" />
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Q3 2025</strong> - Full Cleanup
                        <FontAwesomeIcon icon={faCheckCircle} className="text-secondary" />
                    </li>
                </ul>
            </section>
        </main>
    );
}
