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
    const [year, setYear] = useState("2023");
    const [month, setMonth] = useState("1");

    const years = [2023, 2024, 2025];
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

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

    const onYearOptionChangeHandler = (event) => {
        setYear(event.target.value);
        console.log("User Selected Year - ", event.target.value);
    };

    const onMonthOptionChangeHandler = (event) => {
        setMonth(event.target.value);
        console.log("User Selected Month - ", event.target.value);
    };

    return (
        <div className="container mt-5">
            <div className="card shadow-lg p-4 mb-5">
                <h2 className="text-center mb-4 text-primary">Financial Dashboard</h2>
                <div className="d-flex justify-content-between mb-4">
                    {/* Year and Month Select Dropdown */}
                    <div>
                        <label htmlFor="year" className="form-label">Year:</label>
                        <select className="form-select" onChange={onYearOptionChangeHandler} value={year}>
                            {years.map((yr, index) => (
                                <option key={index} value={yr}>{yr}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="month" className="form-label">Month:</label>
                        <select className="form-select" onChange={onMonthOptionChangeHandler} value={month}>
                            {months.map((mth, index) => (
                                <option key={index} value={mth}>{mth}</option>
                            ))}
                        </select>
                    </div>
                </div>

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
                        if (trackerEntry.id.year === parseInt(year) && trackerEntry.id.month === parseInt(month)) {
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
                        }
                        return null;
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

