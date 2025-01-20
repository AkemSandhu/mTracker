import axios from "axios";
import Select from 'react-select';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS

export default function AddTransaction() {
  let navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    userID: 3, transactionDate: "", categoryID: "", transactionAmount: 0, transactionDescription: ""
  });

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);

  const { transactionDate, transactionAmount, transactionDescription } = transaction;
  const userID = Number(JSON.parse(Cookies.get("auth")).userID);

  useEffect(() => {
    loadAllCategories();
  }, []);

  const onInputChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const loadAllCategories = async () => {
    const result = await axios.get("http://localhost:8080/api/transactioncategories/category");
    setCategories(result.data);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    transaction.userID = userID;
    transaction.categoryID = category.categoryID;
    transaction.transactionAmount = Number(transaction.transactionAmount);
    await axios.post("http://localhost:8080/api/transactions", transaction);
    navigate("/webapp/transactions");
  };

  const onOptionChangeHandler = (event) => {
    setCategory(event);
  };

  return (
      <div className="container mt-5">
        {/* Card to hold form */}
        <div className="card shadow-lg p-4">
          <h2 className="text-center text-primary mb-4">Add New Transaction</h2>

          {/* Form to Add Transaction */}
          <form onSubmit={(e) => onSubmit(e)}>
            {/* Transaction Date */}
            <div className="mb-3">
              <label htmlFor="transactionDate" className="form-label">Transaction Date</label>
              <input
                  type="date"
                  min="2023-01-01"
                  max="2025-12-31"
                  placeholder="Enter Transaction Date"
                  name="transactionDate"
                  value={transactionDate}
                  onChange={(e) => onInputChange(e)}
                  className="form-control"
              />
            </div>

            {/* Category Selector */}
            <div className="mb-3">
              <label htmlFor="categoryID" className="form-label">Category</label>
              <Select
                  onChange={onOptionChangeHandler}
                  getOptionValue={option => option.categoryID}
                  getOptionLabel={option => option.categoryDescription}
                  options={categories}
                  className="form-control"
              />
            </div>

            {/* Transaction Amount */}
            <div className="mb-3">
              <label htmlFor="transactionAmount" className="form-label">Transaction Amount</label>
              <input
                  type="number"
                  placeholder="Enter Transaction Amount"
                  name="transactionAmount"
                  value={transactionAmount}
                  onChange={(e) => onInputChange(e)}
                  className="form-control"
              />
            </div>

            {/* Transaction Description */}
            <div className="mb-3">
              <label htmlFor="transactionDescription" className="form-label">Description</label>
              <input
                  type="text"
                  placeholder="Enter Transaction Description"
                  name="transactionDescription"
                  value={transactionDescription}
                  onChange={(e) => onInputChange(e)}
                  className="form-control"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button type="submit" className="btn btn-success btn-lg">Submit</button>
            </div>
          </form>

          {/* Cancel Button */}
          <div className="text-center mt-3">
            <Link to="/webapp/transactions" className="btn btn-danger btn-lg">
              Cancel
            </Link>
          </div>
        </div>
      </div>
  );
}
