import axios from "axios";
import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function AddBudgetEntry() {
  let navigate = useNavigate();

  const [budgetEntry, setBudgetEntry] = useState({
    budgetYear: 0, budgetMonth: 0, budgetAccount: "", budgetAmount: 0
  });
  const [budgetEntry1, setBudgetEntry1] = useState({
    id: {userID: 0, budgetYear: 0, budgetMonth: 0, budgetAccount: ""},
    budgetAmount: 0
  });

  const [categories, setCategories] = useState([]);

  const [category, setCategory] = useState([]);

  const { budgetYear, budgetMonth, budgetAmount } = budgetEntry;

  const userID = Number(JSON.parse(Cookies.get("auth")).userID);

  useEffect(() => {
    loadAllCategories();
  }, []);

  const onInputChange = (e) => {
    setBudgetEntry({ ...budgetEntry, [e.target.name]: e.target.value });
  };

  const loadAllCategories = async () => {
    const result = await axios.get("http://localhost:8080/api/transactioncategories/category");
    setCategories(result.data);
    console.log(result.data);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(budgetEntry);
    budgetEntry1.id.userID = userID;
    budgetEntry1.id.budgetYear = Number(budgetEntry.budgetYear);
    budgetEntry1.id.budgetMonth = Number(budgetEntry.budgetMonth);
    budgetEntry1.id.budgetAccount = category;
    budgetEntry1.budgetAmount = Number(budgetEntry.budgetAmount);
    console.log(budgetEntry1);
    await axios.post("http://localhost:8080/api/budgetentries", budgetEntry1);
    navigate("/webapp/budget");
  };

  const onOptionChangeHandler = (event) => {
    setCategory(event.target.value);
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
              <label htmlFor="BudgetEntryYear" className="form-label">
                Budget Entry Year
              </label>
              <input
                  type={"number"}
                  className="form-control"
                  placeholder="w Budget Entry Year"
                  name="budgetYear"
                  value={budgetYear}
                  onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="BudgetEntryMonth" className="form-label">
                Budget Entry Month
              </label>
              <input
                  type={"number"}
                  className="form-control"
                  placeholder="w Budget Entry Month"
                  name="budgetMonth"
                  value={budgetMonth}
                  onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="BudgetEntryAccount" className="form-label">
                Budget Entry Account
              </label>
              <select onChange={onOptionChangeHandler}>
                {categories.map((categories, index) => (
                    <option key={index}>
                      {categories.categoryID}
                    </option>
                ))}
              </select>
              {/*<input*/}
              {/*    type={"text"}*/}
              {/*    className="form-control"*/}
              {/*    placeholder="w BudgetEntry Type"*/}
              {/*    name="budgetAccount"*/}
              {/*    value={budgetAccount}*/}
              {/*    onChange={(e) => onInputChange(e)}*/}
              {/*/>*/}
            </div>
            <div className="mb-3">
              <label htmlFor="BudgetEntryAmount" className="form-label">
                Budget Entry Amount
              </label>
              <input
                  type={"text"}
                  className="form-control"
                  placeholder="w BudgetEntry Type"
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
