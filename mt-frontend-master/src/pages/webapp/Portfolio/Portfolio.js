import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Cookies from "js-cookie";

export default function Portfolios() {
  const [portfolios, setPortfolios] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadPortfoliosByUser();
  }, []);

  let userID;
  useEffect(() => {
    if (Cookies.get("auth")) {
      userID = Number(JSON.parse(Cookies.get("auth")).userID)
    } else {
      navigate("/login")
    }
    loadTransactionsByUser();
  }, []);

  const loadPortfoliosByUser = async () => {
    const result = await axios.get(`http://localhost:8080/api/portfolioentries/user/${userID}`);
    setPortfolios(result.data);
    //console.log(result.data);
  };

  const deletePortfolioEntry = async (userID, transactionDate, stockSymbol) => {
    await axios.delete(`http://localhost:8080/api/portfolioentries/portfolioEntry/${userID}/${transactionDate}/${stockSymbol}`);
    loadPortfoliosByUser();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
          <tr>
            <th scope="col">Transaction Date</th>
            <th scope="col">Symbol</th>
            <th scope="col">Unit Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Actions</th>
          </tr>
          </thead>
          <tbody>
            {portfolios.map((portfolio, index) => (
                <tr>
                  <th>{portfolio.id.transactionDate}</th>
                  <td>{portfolio.id.stockSymbol}</td>
                  <td>{portfolio.stockUnitPrice}</td>
                  <td>{portfolio.stockQuantity}</td>
                  <td>
                    {/*<Link*/}
                    {/*    className="btn btn-outline-primary mx-2"*/}
                    {/*    to={`/edituser/${portfolio.id}`}*/}
                    {/*>*/}
                    {/*  Edit*/}
                    {/*</Link>*/}
                    <button
                        className="btn btn-danger mx-2"
                        onClick={() => deletePortfolioEntry(portfolio.id.userID, portfolio.id.transactionDate, portfolio.id.stockSymbol)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
