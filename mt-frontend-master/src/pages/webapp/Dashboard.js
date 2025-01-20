import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "../../style.css"
import Select from "react-select"; // Import react-select for custom dropdowns

// Import Bootstrap for styling
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Dashboard() {
    const [trackerEntries, setTrackerEntries] = useState([]);
    const navigate = useNavigate();

    let userID;

    useEffect(() => {
        if (Cookies.get("auth")) {
            userID = Number(JSON.parse(Cookies.get("auth")).userID);
        } else {
            navigate("/login");
        }
        loadTrackerEntriesByUser();
    }, []);

    const loadTrackerEntriesByUser = async () => {
        const result = await axios.get(`http://localhost:8080/api/trackerentries/user/${userID}`);
        setTrackerEntries(result.data);
        console.log(result.data);
    };

    return (
        <div className="container mt-5">
            <div className="card shadow-lg p-4 mb-5">
                <h2 className="text-center mb-4 text-primary">Financial Dashboard</h2>
                {/* Tracker Entries Table */}
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                    <tr className="table-primary">
                        <th>Year</th>
                        <th>Month</th>
                        <th>Category</th>
                        <th>Amount Allocated</th>
                        <th>Amount Spent</th>
                        <th>Amount Left</th>
                    </tr>
                    </thead>
                    <tbody>
                    {trackerEntries.map((trackerEntry, index) => {
                        return (
                            <tr key={index}>
                                <td>{trackerEntry.id.year}</td>
                                <td>{trackerEntry.id.month}</td>
                                <td>{trackerEntry.transactionCategoryDescription}</td>
                                <td>{trackerEntry.budgetAmount}</td>
                                <td>{trackerEntry.transactionAmount}</td>
                                <td>{trackerEntry.budgetRemaining}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>

            {/* Action Button Section */}
            <div className="d-flex justify-content-end">
                <Link to="/add-entry" className="btn btn-success me-2">Add New Entry</Link>
                <Link to="/settings" className="btn btn-secondary">Settings</Link>
            </div>
        </div>
    );
}

