import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS

export default function Accounts() {
  const [accounts, setAccounts] = useState([]);
  const navigate = useNavigate();
  let userID;

  useEffect(() => {
    if (Cookies.get("auth")) {
      userID = Number(JSON.parse(Cookies.get("auth")).userID);
    } else {
      navigate("/login");
    }
    loadAccountsByUser();
  }, []);

  const loadAccountsByUser = async () => {
    const result = await axios.get(`http://localhost:8080/api/accounts/user/${userID}`);
    setAccounts(result.data);
  };

  return (
      <div className="container mt-5">
        {/* Card for Account Management */}
        <div className="card shadow-lg p-4 mb-5">
          <h2 className="text-center mb-4 text-primary">Your Accounts</h2>

          {/* Accounts Table */}
          <table className="table table-bordered table-striped table-hover">
            <thead className="table-light">
            <tr>
              <th>Account Type</th>
              <th>Account Balance</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {accounts.map((account, index) => (
                <tr key={index}>
                  <td>{account.id.accountType}</td>
                  <td>{account.accountBalance}</td>
                  <td>
                    <Link to={`/webapp/accounts/edit/${userID}/${account.id.accountType}`} className="btn btn-warning btn-sm">
                      Add/Subtract
                    </Link>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>

          {/* Add New Account Button */}
          <div className="d-flex justify-content-end mt-4">
            <Link to="/webapp/accounts/add" className="btn btn-success btn-lg">
              Add New Account
            </Link>
          </div>
        </div>
      </div>
  );
}