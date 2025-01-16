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
    navigate("/webapp/accounts");
  };

  const loadAccount = async () => {
    const result = await axios.get(`http://localhost:8080/api/accounts/user/${Number(userID)}/${accountType}`);
    console.log(result.data)
    setAccount(result.data);
  };

  return (
      <div>
        <div>
          <h2>Edit Account</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div>
              <label htmlFor="AccountBalance">Account Balance</label>
              <input
                  type="text"
                  placeholder="Enter your budget amount"
                  name="accountBalance"
                  value={accountBalance}
                  onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit">Submit</button>
            <Link to="/webapp/accounts">Cancel</Link>
          </form>
        </div>
      </div>

  );
}
