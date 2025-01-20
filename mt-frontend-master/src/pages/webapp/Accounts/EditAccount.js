import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS

export default function EditAccount() {
  let navigate = useNavigate();
  const { accountType } = useParams();  // Get account type from URL params

  const [account, setAccount] = useState({
    userID: 0,
    accountType: "",
    accountBalance: 0
  });

  const { accountBalance } = account;

  const onInputChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const userID = Number(JSON.parse(Cookies.get("auth")).userID);

  useEffect(() => {
    loadAccount();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/accounts/balance/${userID}/${accountType}/${account.accountBalance}`);
    navigate("/webapp/accounts");
  };

  const loadAccount = async () => {
    const result = await axios.get(`http://localhost:8080/api/accounts/user/${userID}/${accountType}`);
    setAccount(result.data);
  };

  return (
      <div className="container mt-5">
        {/* Card Layout for Edit Account Form */}
        <div className="card shadow-lg p-4 mb-5">
          <h2 className="text-center text-primary mb-4">Edit Account</h2>

          {/* Form for Editing Account */}
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="AccountBalance" className="form-label">Account Balance</label>
              <input
                  type="number"
                  className="form-control"
                  placeholder="Enter new account balance"
                  name="accountBalance"
                  value={accountBalance}
                  onChange={(e) => onInputChange(e)}
                  required
              />
            </div>

            {/* Submit and Cancel Buttons */}
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-primary">Submit</button>
              <Link to="/webapp/accounts" className="btn btn-secondary">Cancel</Link>
            </div>
          </form>
        </div>
      </div>
  );
}
