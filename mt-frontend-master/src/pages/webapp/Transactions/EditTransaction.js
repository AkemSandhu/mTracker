import axios from "axios";
import Select from 'react-select';
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS

export default function EditTransaction() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [transaction, setTransaction] = useState({
    userID: 1, transactionDate: "", categoryID: "", transactionAmount: 0, transactionDescription: ""
  });

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);

  const [defaultCategory, setDefaultCategory] = useState([]);

  const { transactionDate, transactionAmount, transactionDescription } = transaction;

  useEffect(() => {
    loadTransaction();
    loadAllCategories();
  }, []);

  const loadTransaction = async () => {
    const result = await axios.get(`http://localhost:8080/api/transactions/id/${id}`);
    setTransaction(result.data);
  };

  const loadAllCategories = async () => {
    const result = await axios.get("http://localhost:8080/api/transactioncategories/category");
    setCategories(result.data);
    const selectedCategory = result.data.find(item => item.categoryID === transaction.categoryID);
    setDefaultCategory(selectedCategory ? [selectedCategory] : []);
  };

  const onInputChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const onOptionChangeHandler = (event) => {
    setCategory(event);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/transactions/update/${id}/${transaction.transactionDate}/${category.categoryID}/${transaction.transactionAmount}/${transaction.transactionDescription}`);
    navigate("/webapp/transactions");
  };

  return (
      <div className="container mt-5">
        <div className="card shadow-lg p-4">
          <h2 className="text-center text-primary mb-4">Edit Transaction</h2>

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
                  defaultValue={defaultCategory}
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