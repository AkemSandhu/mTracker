import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Select from "react-select";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS

export default function AddBudgetEntry() {
  let navigate = useNavigate();

  const [budgetEntry, setBudgetEntry] = useState({
    budgetYear: 0, budgetMonth: 0, budgetAccount: "", budgetAmount: 0
  });
  const [budgetEntry1, setBudgetEntry1] = useState({
    id: { userID: 0, budgetYear: 0, budgetMonth: 0, budgetAccount: "" },
    budgetAmount: 0
  });

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);

  const { budgetYear, budgetMonth, budgetAmount } = budgetEntry;

  const userID = Number(JSON.parse(Cookies.get("auth")).userID);
  const months_vals = [
    { Monthvalue: "01", Monthlabel: "JAN" },
    { Monthvalue: "02", Monthlabel: "FEB" },
    { Monthvalue: "03", Monthlabel: "MAR" },
    { Monthvalue: "04", Monthlabel: "APRIL" },
    { Monthvalue: "05", Monthlabel: "MAY" },
  ];
  const year_vals = [
    { Yearvalue: "2023", Yearlabel: "2023" },
    { Yearvalue: "2024", Yearlabel: "2024" },
    { Yearvalue: "2025", Yearlabel: "2025" },
  ];

  useEffect(() => {
    loadAllCategories();
  }, []);

  const onInputChange = (e) => {
    setBudgetEntry({ ...budgetEntry, [e.target.name]: e.target.value });
  };

  const loadAllCategories = async () => {
    const result = await axios.get("http://localhost:8080/api/transactioncategories/category");
    setCategories(result.data);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    budgetEntry1.id.userID = userID;
    budgetEntry1.id.budgetYear = Number(budgetEntry.budgetYear);
    budgetEntry1.id.budgetMonth = Number(budgetEntry.budgetMonth);
    budgetEntry1.id.budgetAccount = category;
    budgetEntry1.budgetAmount = Number(budgetEntry.budgetAmount);
    await axios.post("http://localhost:8080/api/budgetentries", budgetEntry1);
    navigate("/webapp/budget");
  };

  const onOptionChangeHandler = (event) => {
    setCategory(event.target.value);
  };

  const onOptionChangeHandlerMonth = (event) => {
    setBudgetEntry({ ...budgetEntry, budgetMonth: event.Monthvalue });
  };
  const onOptionChangeHandlerYear = (event) => {
    setBudgetEntry({ ...budgetEntry, budgetYear: event.Yearvalue });
  };

  return (
      <div className="container mt-5">
        {/* Add Budget Entry Card */}
        <div className="card shadow-lg p-4">
          <h2 className="text-center text-primary mb-4">Add Budget Entry</h2>
          <form onSubmit={(e) => onSubmit(e)}>

            {/* Year Selection */}
            <div className="mb-3">
              <label htmlFor="BudgetEntryYear" className="form-label">Budget Entry Year</label>
              <Select
                  onChange={onOptionChangeHandlerYear}
                  getOptionValue={option => option.Yearvalue}
                  getOptionLabel={option => option.Yearlabel}
                  options={year_vals}
                  defaultValue={year_vals[0]}
                  className="react-select"
              />
            </div>

            {/* Month Selection */}
            <div className="mb-3">
              <label htmlFor="BudgetEntryMonth" className="form-label">Budget Entry Month</label>
              <Select
                  onChange={onOptionChangeHandlerMonth}
                  getOptionValue={option => option.Monthvalue}
                  getOptionLabel={option => option.Monthlabel}
                  options={months_vals}
                  defaultValue={months_vals[0]}
                  className="react-select"
              />
            </div>

            {/* Account Selection */}
            <div className="mb-3">
              <label htmlFor="BudgetEntryAccount" className="form-label">Budget Entry Account</label>
              <select onChange={onOptionChangeHandler} className="form-select">
                {categories.map((category, index) => (
                    <option key={index} value={category.categoryID}>
                      {category.categoryID}
                    </option>
                ))}
              </select>
            </div>

            {/* Amount Input */}
            <div className="mb-3">
              <label htmlFor="BudgetEntryAmount" className="form-label">Budget Entry Amount</label>
              <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Budget Amount"
                  name="budgetAmount"
                  value={budgetAmount}
                  onChange={(e) => onInputChange(e)}
              />
            </div>

            {/* Submit and Cancel Buttons */}
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-primary">Submit</button>
              <Link to="/webapp/budget" className="btn btn-secondary">Cancel</Link>
            </div>
          </form>
        </div>
      </div>
  );
}