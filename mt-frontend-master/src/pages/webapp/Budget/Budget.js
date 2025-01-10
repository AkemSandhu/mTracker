import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import Cookies from "js-cookie";

export default function Budget() {
  const [budgetEntries, setBudgetEntries] = useState([]);

  const navigate = useNavigate();

  let userID;
  useEffect(() => {
    if (Cookies.get("auth")) {
      userID = Number(JSON.parse(Cookies.get("auth")).userID)
    } else {
      navigate("/login")
    }
    loadBudgetEntriesByUser();
  }, []);

  const loadBudgetEntriesByUser = async () => {
    const result = await axios.get(`http://localhost:8080/api/budgetentries/user/${userID}`);
    setBudgetEntries(result.data);
    console.log(result.data);
  };

  const deleteBudgetEntry = async (budgetYear, budgetMonth, budgetAccount) => {
    await axios.delete(`http://localhost:8080/api/budgetentries/budgetEntry/${userID}/${budgetYear}/${budgetMonth}/${budgetAccount}`);
    loadBudgetEntriesByUser();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
          <tr>
            <th scope="col">Year</th>
            <th scope="col">Month</th>
            <th scope="col">Category</th>
            <th scope="col">Amount Allocated</th>
            <th scope="col">Actions</th>
          </tr>
          </thead>
          <tbody>
            {budgetEntries.map((budgetEntry, index) => (
                <tr>
                  <th>{budgetEntry.id.budgetYear}</th>
                  <td>{budgetEntry.id.budgetMonth}</td>
                  <td>{budgetEntry.id.budgetAccount}</td>
                  <td>{budgetEntry.budgetAmount}</td>
                  <td>
                    <Link
                        className="btn btn-outline-primary mx-2"
                        to={`/webapp/budget/editEntry/${userID}/${budgetEntry.id.budgetYear}/${budgetEntry.id.budgetMonth}/${budgetEntry.id.budgetAccount}`}
                    >
                      Edit
                    </Link>
                    <button
                        className="btn btn-danger mx-2"
                        onClick={() => deleteBudgetEntry(budgetEntry.id.budgetYear, budgetEntry.id.budgetMonth, budgetEntry.id.budgetAccount)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link className="btn btn-outline-danger mx-2" to="/webapp/budget/addEntry">
        Add
      </Link>
    </div>
  );
}
