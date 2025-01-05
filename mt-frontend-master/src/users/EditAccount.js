import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";

export default function EditAccount() {
  let navigate = useNavigate();

  const { accountType} = useParams();
  console.log(useParams());

  const [account, setAccount] = useState({
    userID: 0, accountType: "", accountBalance: 0
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
    await axios.put(`http://localhost:8080/api/accounts/balance/${Number(userID)}/${accountType}/${account.accountBalance}`);
    navigate("/accounts");
  };

  const loadAccount = async () => {
    const result = await axios.get(`http://localhost:8080/api/accounts/user/${Number(userID)}/${accountType}`);
    console.log(result.data)
    setAccount(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Account</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="AccountBalance" className="form-label">
                Account Balance
              </label>
              <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your budget amount"
                  name="accountBalance"
                  value={accountBalance}
                  onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/accounts">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
