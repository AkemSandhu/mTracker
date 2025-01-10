import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import Cookies from "js-cookie";

export default function Accounts() {
  const [accounts, setAccounts] = useState([]);

  const navigate = useNavigate();

  let userID;
  useEffect(() => {
    if (Cookies.get("auth")) {
      userID = Number(JSON.parse(Cookies.get("auth")).userID)
    } else {
      navigate("/login")
    }
    loadAccountsByUser();
  }, []);

  const loadAccountsByUser = async () => {
    const result = await axios.get(`http://localhost:8080/api/accounts/user/${userID}`);
    setAccounts(result.data);

  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
          <tr>
            <th scope="col">Account Type</th>
            <th scope="col">Account Balance</th>
            <th scope="col">Actions</th>
          </tr>
          </thead>
          <tbody>
            {accounts.map((account, index) => (
              <tr>
                <th>{account.id.accountType}</th>
                <td>{account.accountBalance}</td>
                <td>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/webapp/accounts/edit/${userID}/${account.id.accountType}`}
                  >
                    Add/Subtract
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link className="btn btn-outline-danger mx-2" to="/webapp/accounts/add">
        Add
      </Link>
    </div>
  );
}
