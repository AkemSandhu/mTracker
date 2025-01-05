import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ExchangeStock() {
  let navigate = useNavigate();

  const [stock, setStock] = useState({
    userID: 1, transactionDate: "", stockSymbol: "", stockUnitPrice: 0, stockQuantity: 0
  });
  const [stock1, setStock1] = useState({
    id: {userID: 1, transactionDate: "", stockSymbol: ""},
    stockUnitPrice: 0, stockQuantity: 0
  });

  const { userID, transactionDate, stockSymbol, stockUnitPrice, stockQuantity } = stock;

  const onInputChange = (e) => {
    setStock({ ...stock, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(stock);
    stock1.id.userID = stock.userID;
    stock1.id.transactionDate = stock.transactionDate;
    stock1.id.stockSymbol = stock.stockSymbol;
    stock1.stockUnitPrice = Number(stock.stockUnitPrice);
    stock1.stockQuantity = Number(stock.stockQuantity);
    console.log(stock1);
    await axios.post("http://localhost:8080/api/portfolioentries", stock1);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="transactionDate" className="form-label">
                Transaction Date
              </label>
              <input
                  type={"text"}
                  className="form-control"
                  placeholder="w Date"
                  name="transactionDate"
                  value={transactionDate}
                  onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="stockSymbol" className="form-label">
                Stock Balance
              </label>
              <input
                  type={"text"}
                  className="form-control"
                  placeholder="w Stock Symbol"
                  name="stockSymbol"
                  value={stockSymbol}
                  onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="stockUnitPrice" className="form-label">
                Stock Unit Price
              </label>
              <input
                  type={"text"}
                  className="form-control"
                  placeholder="w Unit Price"
                  name="stockUnitPrice"
                  value={stockUnitPrice}
                  onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="stockQuantity" className="form-label">
                Stock Quantity
              </label>
              <input
                  type={"text"}
                  className="form-control"
                  placeholder="w Stock Symbol"
                  name="stockQuantity"
                  value={stockQuantity}
                  onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
