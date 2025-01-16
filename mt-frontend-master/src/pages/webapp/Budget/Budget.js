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
      <div>
        <div>
          <table>
            <thead>
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
                        to={`/webapp/budget/editEntry/${userID}/${budgetEntry.id.budgetYear}/${budgetEntry.id.budgetMonth}/${budgetEntry.id.budgetAccount}`}>
                      Edit
                    </Link>
                    <button
                        onClick={() => deleteBudgetEntry(budgetEntry.id.budgetYear, budgetEntry.id.budgetMonth, budgetEntry.id.budgetAccount)}>
                      Delete
                    </button>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
        <Link to="/webapp/budget/addEntry">
          Add
        </Link>
      </div>
  );
}
