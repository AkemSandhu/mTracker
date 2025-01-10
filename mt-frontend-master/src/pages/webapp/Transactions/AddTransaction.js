import axios from "axios";
import Select from 'react-select';
import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function AddTransaction() {
  let navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    userID: 3, transactionDate: "", categoryID: "", transactionAmount: 0, transactionDescription: ""
  });

  const [categories, setCategories] = useState([]);

  const [category, setCategory] = useState([]);

  const { transactionDate, transactionAmount, transactionDescription } = transaction

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
    console.log(result.data);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    transaction.userID = userID;
    transaction.categoryID = category
    transaction.transactionAmount = Number(transaction.transactionAmount);
    console.log(transaction);
    await axios.post("http://localhost:8080/api/transactions", transaction);
    navigate("/webapp/transactions");
  };

  const onOptionChangeHandler = (event) => {
    setCategory(event.categoryID);
    console.log(
        "User Selected Value - ",
        event.categoryID
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="transactionDate" className="form-label">
                Transaction Date
              </label>
              <input
                  type={"date"}
                  min="2023-01-01"
                  max="2025-12-31"
                  className="form-control"
                  placeholder="w Transaction Date"
                  name="transactionDate"
                  value={transactionDate}
                  onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="categoryID" className="form-label">
                Category ID
              </label>
              {/*<select onChange={onOptionChangeHandler}>*/}
              {/*  {categories.map((categories, index) => (*/}
              {/*      <option key={index}>*/}
              {/*        {categories.categoryID}*/}
              {/*      </option>*/}
              {/*  ))}*/}
              {/*</select>*/}
              <Select
                  onChange={onOptionChangeHandler}
                  getOptionValue={option => option.categoryID}
                  getOptionLabel={option => option.categoryDescription}
                  options={categories}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="transactionAmount" className="form-label">
                Transaction Amount
              </label>
              <input
                  type={"text"}
                  className="form-control"
                  placeholder="w Transaction Amount"
                  name="transactionAmount"
                  value={transactionAmount}
                  onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="transactionDescription" className="form-label">
                Transaction Description
              </label>
              <input
                  type={"text"}
                  className="form-control"
                  placeholder="w Transaction Description"
                  name="transactionDescription"
                  value={transactionDescription}
                  onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/webapp/transactions">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
