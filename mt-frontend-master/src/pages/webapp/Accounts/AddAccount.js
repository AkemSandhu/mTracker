import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS

export default function AddAccount() {
  let navigate = useNavigate();

  const [account, setAccount] = useState({
    accountType: "",
    accountBalance: ""
  });

  const [account1, setAccount1] = useState({
    id: { userID: 1, accountType: "" },
    accountBalance: ""
  });

  const [accountTypes, setAccountTypes] = useState([]);
  const [accountTypePlace, setAccountTypePlace] = useState([]);

  const { accountBalance } = account;
  const userID = Number(JSON.parse(Cookies.get("auth")).userID);

  useEffect(() => {
    loadAllAccountTypes();
  }, []);

  const onInputChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const loadAllAccountTypes = async () => {
    const result = await axios.get("http://localhost:8080/api/accounttypes/type");
    setAccountTypes(result.data);
    console.log(result.data);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    account1.id.accountType = accountTypePlace;
    account1.id.userID = userID;
    account1.accountBalance = account.accountBalance;
    console.log(account1);
    await axios.post("http://localhost:8080/api/accounts", account1);
    navigate("/webapp/accounts");
  };

  const onOptionChangeHandler = (event) => {
    setAccountTypePlace(event.target.value);
    console.log("User Selected Value - ", event.target.value);
  };

  return (
      <div className="container mt-5">
        {/* Card Layout for Add Account Form */}
        <div className="card shadow-lg p-4 mb-5">
          <h2 className="text-center text-primary mb-4">Add New Account</h2>

          {/* Form for Adding Account */}
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="AccountType" className="form-label">Account Type</label>
              <select
                  className="form-select"
                  onChange={onOptionChangeHandler}
                  required
              >
                <option value="">Select Account Type</option>
                {accountTypes.map((accountType, index) => (
                    <option key={index} value={accountType.accountType}>
                      {accountType.accountType}
                    </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="AccountBalance" className="form-label">Account Balance</label>
              <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Account Balance"
                  name="accountBalance"
                  value={accountBalance}
                  onChange={(e) => onInputChange(e)}
                  required
              />
            </div>

            {/* Submit Button */}
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-primary">Submit</button>

              {/* Cancel Button */}
              <Link to="/webapp/accounts" className="btn btn-secondary">Cancel</Link>
            </div>
          </form>
        </div>
      </div>
  );
}