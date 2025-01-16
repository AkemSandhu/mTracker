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
      <div>
        <div>
          <h2>Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div>
              <label htmlFor="transactionDate">Transaction Date</label>
              <input
                  type="date"
                  min="2023-01-01"
                  max="2025-12-31"
                  placeholder="w Transaction Date"
                  name="transactionDate"
                  value={transactionDate}
                  onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <label htmlFor="categoryID">Category ID</label>
              <Select
                  onChange={onOptionChangeHandler}
                  getOptionValue={option => option.categoryID}
                  getOptionLabel={option => option.categoryDescription}
                  options={categories}
              />
            </div>
            <div>
              <label htmlFor="transactionAmount">Transaction Amount</label>
              <input
                  type="text"
                  placeholder="w Transaction Amount"
                  name="transactionAmount"
                  value={transactionAmount}
                  onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <label htmlFor="transactionDescription">Transaction Description</label>
              <input
                  type="text"
                  placeholder="w Transaction Description"
                  name="transactionDescription"
                  value={transactionDescription}
                  onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit">Submit</button>
            <Link to="/webapp/transactions">Cancel</Link>
          </form>
        </div>
      </div>
  );
}
