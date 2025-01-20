import React from "react";
import "../../../style.css"

export default function Literacy() {
    return (
        <section className="blog-post-container">
            <h2 className="post-title">Understanding Financial Illiteracy and How Online Trackers Can Help</h2>
            <p className="post-meta">
                Posted on <time dateTime="2024-10-22">October 22, 2024</time> by <span className="author-name">Akem</span>
            </p>

            <div className="post-content">
                <p>
                    Financial illiteracy is a significant issue that affects millions worldwide. Many individuals lack the
                    basic knowledge to make informed financial decisions, leading to poor budgeting, excessive debt, and
                    insufficient savings.
                </p>

                <p>
                    Online financial trackers, such as mTracker, play a crucial role in addressing this issue. By providing
                    users with tools to monitor their spending, set budgets, and analyze their financial habits, these
                    applications empower individuals to take control of their finances.
                </p>
            </div>

            <div className="cta-container">
                <a href="/get-started" className="cta-btn">Start Tracking Your Finances Today</a>
            </div>
        </section>
    );
}
