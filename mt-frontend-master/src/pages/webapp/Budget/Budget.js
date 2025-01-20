import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS

export default function Budget() {
  const [budgetEntries, setBudgetEntries] = useState([]);
  const navigate = useNavigate();
  var lclUserID;
  let userID;
//  const [userID1, setUserID1] = useState([]);

  // Fetching budget entries on page load
  useEffect(() => {
    if (Cookies.get("auth")) {
      lclUserID = Number(JSON.parse(Cookies.get("auth")).userID);
//      setUserID1(Number(JSON.parse(Cookies.get("auth")).userID));
    } else {
      navigate("/login");
    }
    loadBudgetEntriesByUser();
  }, []);

  const loadBudgetEntriesByUser = async () => {
    const result = await axios.get(`http://localhost:8080/api/budgetentries/user/${Number(JSON.parse(Cookies.get("auth")).userID)}`);
    setBudgetEntries(result.data);
  };

  const deleteBudgetEntry = async (budgetYear, budgetMonth, budgetAccount) => {
    console.log(userID, budgetYear, budgetMonth, budgetAccount);
    await axios.delete(`http://localhost:8080/api/budgetentries/budgetEntry/${Number(JSON.parse(Cookies.get("auth")).userID)}/${budgetYear}/${budgetMonth}/${budgetAccount}`);
    loadBudgetEntriesByUser();
  };

  return (
      <div className="container mt-5">
        {/* Budget Table in Card Layout */}
        <div className="card shadow-lg p-4 mb-5">
          <h2 className="text-center text-primary mb-4">Budget Entries</h2>

          {/* Budget Entries Table */}
          <table className="table table-striped table-hover">
            <thead className="thead-dark">
            <tr>
              <th>Year</th>
              <th>Month</th>
              <th>Category</th>
              <th>Amount Allocated</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {budgetEntries.map((budgetEntry, index) => (
                <tr key={index}>
                  <th>{budgetEntry.id.budgetYear}</th>
                  <td>{budgetEntry.id.budgetMonth}</td>
                  <td>{budgetEntry.id.budgetAccount}</td>
                  <td>{budgetEntry.budgetAmount}</td>
                  <td>
                    <Link
                        to={`/webapp/budget/editEntry/${Number(JSON.parse(Cookies.get("auth")).userID)}/${budgetEntry.id.budgetYear}/${budgetEntry.id.budgetMonth}/${budgetEntry.id.budgetAccount}`}
                        className="btn btn-warning btn-sm me-2"
                    >
                      Edit
                    </Link>
                    <button
                        onClick={() => deleteBudgetEntry(budgetEntry.id.budgetYear, budgetEntry.id.budgetMonth, budgetEntry.id.budgetAccount)}
                        className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>

          {/* Add New Budget Entry Button */}
          <div className="text-center mt-4">
            <Link to="/webapp/budget/addEntry" className="btn btn-success">
              Add New Entry
            </Link>
          </div>
        </div>
      </div>
  );
}