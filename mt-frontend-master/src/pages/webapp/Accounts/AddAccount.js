import axios from "axios";
import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function AddAccount() {
  let navigate = useNavigate();

  const [account, setAccount] = useState({
    accountType: "", accountBalance: ""
  });
  const [account1, setAccount1] = useState({
    id: {userID: 1, accountType: ""},
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
    console.log(account);
    account1.id.accountType = accountTypePlace;
    account1.id.userID = userID
    account1.accountBalance = account.accountBalance
    console.log(account1);
    await axios.post("http://localhost:8080/api/accounts", account1);
    navigate("/webapp/accounts");
  };

  const onOptionChangeHandler = (event) => {
    setAccountTypePlace(event.target.value);
    console.log(
        "User Selected Value - ",
        event.target.value
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="AccountType" className="form-label">
                Account Type
              </label>
              <select onChange={onOptionChangeHandler}>
                {accountTypes.map((accountType, index) => (
                    <option key={index}>
                      {accountType.accountType}
                    </option>
                ))}
              </select>

              {/*<input*/}
              {/*  type={"text"}*/}
              {/*  className="form-control"*/}
              {/*  placeholder="w Account Type"*/}
              {/*  name="accountType"*/}
              {/*  value={accountType}*/}
              {/*  onChange={(e) => onInputChange(e)}*/}
              {/*/>*/}
            </div>
            <div className="mb-3">
              <label htmlFor="AccountBalance" className="form-label">
                Account Balance
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="w Account Balance"
                name="accountBalance"
                value={accountBalance}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/webapp/accounts">
              Cancel
            </Link>
          </form>
        </div>
      </div>

    </div>
  );
}
