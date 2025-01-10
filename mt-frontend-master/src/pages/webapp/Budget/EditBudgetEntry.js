import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";

export default function EditBudgetEntry() {
  let navigate = useNavigate();

  const { userID, budgetYear, budgetMonth, budgetAccount} = useParams();
  console.log(useParams());

  const [budgetEntry, setBudgetEntry] = useState({
    userID: 1, budgetYear: 0, budgetMonth: 0, budgetAccount: "", budgetAmount: 0
  });

  const { budgetAmount } = budgetEntry;

  const onInputChange = (e) => {
    setBudgetEntry({ ...budgetEntry, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadBudgetEntry();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/budgetentries/balance/${Number(userID)}/${Number(budgetYear)}/${Number(budgetMonth)}/${budgetAccount}/${budgetEntry.budgetAmount}`);
    navigate("/webapp/budget");
  };

  const loadBudgetEntry = async () => {
    const result = await axios.get(`http://localhost:8080/api/budgetentries/id/${Number(userID)}/${Number(budgetYear)}/${Number(budgetMonth)}/${budgetAccount}`);
    console.log(result.data)
    setBudgetEntry(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit BudgetEntry</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="BudgetAmount" className="form-label">
                Budget Amount
              </label>
              <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your budget amount"
                  name="budgetAmount"
                  value={budgetAmount}
                  onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/webapp/budget">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
