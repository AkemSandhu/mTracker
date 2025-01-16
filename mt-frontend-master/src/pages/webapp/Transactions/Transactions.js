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
      navigate("/login")
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
      <div>
        <div>
          <table>
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
                  <th>{transaction.transactionDate}</th>
                  <td>{transaction.categoryID}</td>
                  <td>{transaction.transactionAmount}</td>
                  <td>{transaction.transactionDescription}</td>
                  <td>
                    <Link to={`/webapp/transactions/edit/${transaction.id}`}>
                      Edit
                    </Link>
                    <button onClick={() => deleteTransaction(transaction.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
        <Link to="/webapp/transactions/add">Add</Link>
      </div>

  );
}
