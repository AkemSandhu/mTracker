import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS

export default function EditBudgetEntry() {
  let navigate = useNavigate();
  const { budgetYear, budgetMonth, budgetAccount } = useParams();

  const [budgetEntry, setBudgetEntry] = useState({
    userID: 0, budgetYear: 0, budgetMonth: 0, budgetAccount: "", budgetAmount: 0
  });

  const userID = Number(JSON.parse(Cookies.get("auth")).userID);

  const { budgetAmount } = budgetEntry;

  const onInputChange = (e) => {
    setBudgetEntry({ ...budgetEntry, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadBudgetEntry();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
        `http://localhost:8080/api/budgetentries/balance/${userID}/${Number(budgetYear)}/${Number(budgetMonth)}/${budgetAccount}/${budgetEntry.budgetAmount}`
    );
    navigate("/webapp/budget");
  };

  const loadBudgetEntry = async () => {
    const result = await axios.get(
        `http://localhost:8080/api/budgetentries/id/${userID}/${Number(budgetYear)}/${Number(budgetMonth)}/${budgetAccount}`
    );
    setBudgetEntry(result.data);
  };

  return (
      <div className="container mt-5">
        {/* Edit Budget Entry Card */}
        <div className="card shadow-lg p-4">
          <h2 className="text-center text-primary mb-4">Edit Budget Entry</h2>

          <form onSubmit={(e) => onSubmit(e)}>

            {/* Budget Amount Input */}
            <div className="mb-3">
              <label htmlFor="BudgetAmount" className="form-label">Budget Amount</label>
              <input
                  type="number"
                  className="form-control"
                  placeholder="Enter your budget amount"
                  name="budgetAmount"
                  value={budgetAmount}
                  onChange={(e) => onInputChange(e)}
                  required
              />
            </div>

            {/* Action Buttons */}
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-primary">Submit</button>
              <Link to="/webapp/budget" className="btn btn-secondary">Cancel</Link>
            </div>
          </form>
        </div>
      </div>
  );
}