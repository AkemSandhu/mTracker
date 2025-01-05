import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import Cookies from "js-cookie";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  const navigate = useNavigate();

  let userID;
  useEffect(() => {
    if (Cookies.get("auth")) {
      userID = Number(JSON.parse(Cookies.get("auth")).userID)
    } else {
      navigate("/")
    }
    loadTransactionsByUser();
  }, []);

  const loadTransactionsByUser = async () => {
    const result = await axios.get(`http://localhost:8080/api/transactions/user/${userID}`);
    setTransactions(result.data);
    //console.log(result.data);
  };

  const deleteTransaction = async (id) => {
    await axios.delete(`http://localhost:8080/api/transactions/transaction/${id}`);
    loadTransactionsByUser();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Category</th>
            <th scope="col">Amount</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
                <tr>
                  <th>{transaction.transactionDate}</th>
                  <td>{transaction.categoryID}</td>
                  <td>{transaction.transactionAmount}</td>
                  <td>{transaction.transactionDescription}</td>
                  <td>
                    <Link
                        className="btn btn-outline-primary mx-2"
                        to={`/transactions/edit/${transaction.id}`}
                    >
                      Edit
                    </Link>
                    <button
                        className="btn btn-danger mx-2"
                        onClick={() => deleteTransaction(transaction.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link className="btn btn-outline-danger mx-2" to="/transactions/add">
        Add
      </Link>
    </div>
  );
}
