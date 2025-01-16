import axios from "axios";
import Select from 'react-select';
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditTransaction() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [transaction, setTransaction] = useState({
    userID: 1, transactionDate: "", categoryID: "", transactionAmount: 0, transactionDescription: ""
  });

  const [categories, setCategories] = useState([]);

  const [category, setCategory] = useState([]);

  var transactionT = [];
  var deafultcate = [];

  const { userID, transactionDate, categoryID, transactionAmount, transactionDescription } = transaction;

  const onInputChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadTransaction();
    loadAllCategories();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(transaction);
    await axios.put(`http://localhost:8080/api/transactions/update/${id}/${transaction.transactionDate}/${category}/${transaction.transactionAmount}/${transaction.transactionDescription}`);
    navigate("/webapp/transactions");
  };

  const loadAllCategories = async () => {
    const result = await axios.get("http://localhost:8080/api/transactioncategories/category");
    setCategories(result.data)
    deafultcate.push(result.data[result.data.findIndex(item => item.categoryID === transactionT.categoryID)]);

  };

  const loadTransaction = async () => {
    const result = await axios.get(`http://localhost:8080/api/transactions/id/${id}`);
    setTransaction(result.data);
    transactionT = result.data;
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
          <h2>Edit Transaction</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div>
              <label htmlFor="TransactionDate">Transaction Date</label>
              <input
                  type="date"
                  min="2023-01-01"
                  max="2025-12-31"
                  placeholder="Enter date"
                  name="transactionDate"
                  value={transactionDate}
                  onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <label htmlFor="CategoryID">Category</label>
              <Select
                  onChange={onOptionChangeHandler}
                  getOptionValue={option => option.categoryID}
                  getOptionLabel={option => option.categoryDescription}
                  options={categories}
                  defaultValue={deafultcate}
              />
            </div>
            <div>
              <label htmlFor="TransactionAmount">Transaction Amount</label>
              <input
                  type="text"
                  placeholder="Enter your budget amount"
                  name="transactionAmount"
                  value={transactionAmount}
                  onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <label htmlFor="TransactionDescription">Transaction Description</label>
              <input
                  type="text"
                  placeholder="Enter description"
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
