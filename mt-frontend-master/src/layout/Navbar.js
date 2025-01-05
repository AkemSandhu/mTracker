import React from "react";
import {Link, useNavigate} from "react-router-dom";
import Cookies from "js-cookie";

export default function Navbar() {

  const navigate = useNavigate();

  const logout = async() => {
    Cookies.remove("auth");
    navigate("/")
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Full Stack Application
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link className="btn btn-outline-light" to="/accounts">
            Accounts
          </Link>
          <Link className="btn btn-outline-light" to="/budget">
            Budget
          </Link>
          <Link className="btn btn-outline-light" to="/transactions">
            Transactions
          </Link>
          <button className="btn btn-outline-light" onClick={() => logout()}>
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
}
