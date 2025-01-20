import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();
  let userID;

  useEffect(() => {
    if (Cookies.get("auth")) {
      userID = Number(JSON.parse(Cookies.get("auth")).userID);
    } else {
      navigate("/login");
    }
    loadTransactionsByUser();
  }, []);

  const loadTransactionsByUser = async () => {
    const result = await axios.get(`http://localhost:8080/api/transactions/user/${userID}`);
    setTransactions(result.data);
  };

  const deleteTransaction = async (id) => {
    await axios.delete(`http://localhost:8080/api/transactions/transaction/${id}`);
    loadTransactionsByUser();
  };

  return (
      <div className="container mt-5">
        {/* Transactions Table Card */}
        <div className="card shadow-lg p-4">
          <h2 className="text-center text-primary mb-4">Transactions</h2>

          <table className="table table-striped table-bordered">
            <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.transactionDate}</td>
                  <td>{transaction.categoryID}</td>
                  <td>{transaction.transactionAmount}</td>
                  <td>{transaction.transactionDescription}</td>
                  <td>
                    <Link to={`/webapp/transactions/edit/${transaction.id}`} className="btn btn-warning btn-sm mx-1">
                      Edit
                    </Link>
                    <button
                        className="btn btn-danger btn-sm mx-1"
                        onClick={() => deleteTransaction(transaction.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>

          {/* Add Transaction Link */}
          <div className="text-center mt-4">
            <Link to="/webapp/transactions/add" className="btn btn-success">
              Add New Transaction
            </Link>
          </div>
        </div>
      </div>
  );
}