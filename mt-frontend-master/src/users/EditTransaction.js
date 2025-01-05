import axios from "axios";
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
    await axios.put(`http://localhost:8080/api/transactions/update/${id}/${transaction.transactionDate}/${transaction.categoryID}/${transaction.transactionAmount}/${transaction.transactionDescription}`);
    navigate("/transactions");
  };

  const loadAllCategories = async () => {
    const result = await axios.get("http://localhost:8080/api/transactioncategories/category");
    setCategories(result.data);
  };

  const loadTransaction = async () => {
    const result = await axios.get(`http://localhost:8080/api/transactions/id/${id}`);
    setTransaction(result.data);
    console.log(transaction.categoryID);
  };

  const onOptionChangeHandler = (event) => {
    setCategory(event.target.value);
    console.log(
        "User Selected Value - ",
        event.target.value
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Transaction</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="TransactionDate" className="form-label">
                Transaction Date
              </label>
              <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter date"
                  name="transactionDate"
                  value={transactionDate}
                  onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Category ID" className="form-label">
                Category
              </label>
              <select onChange={onOptionChangeHandler}>
                {categories.map((categories, index) => (
                    <option key={index}>
                      {categories.categoryID}
                    </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="TransactionAmount" className="form-label">
                Transaction Amount
              </label>
              <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your budget amount"
                  name="transactionAmount"
                  value={transactionAmount}
                  onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="TransactionDescription" className="form-label">
                Transaction Description
              </label>
              <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter description"
                  name="transactionDescription"
                  value={transactionDescription}
                  onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/transactions">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
