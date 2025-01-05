import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Accounts from "./pages/Accounts";
import Login from "./pages/login";
import Budget from "./pages/Budget";
import Transactions from "./pages/Transactions";
import Portfolio from "./pages/Portfolio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddAccount from "./users/AddAccount";
import AddBudgetEntry from "./users/AddBudgetEntry";
import ExchangeStock from "./users/ExchangeStock";
import AddTransaction from "./users/AddTransaction";
import EditBudgetEntry from "./users/EditBudgetEntry";
import EditTransaction from "./users/EditTransaction";
import EditAccount from "./users/EditAccount";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/accounts" element={<Accounts />} />
          <Route exact path="/accounts/add" element={<AddAccount />} />
          <Route exact path="/accounts/edit/:userID/:accountType" element={<EditAccount />} />
          <Route exact path="/budget" element={<Budget />} />
          <Route exact path="/budget/addEntry" element={<AddBudgetEntry />} />
          <Route exact path="/budget/editEntry/:userID/:budgetYear/:budgetMonth/:budgetAccount/" element={<EditBudgetEntry />} />
          <Route exact path="/transactions" element={<Transactions />} />
          <Route exact path="/transactions/add" element={<AddTransaction />} />
          <Route exact path="/transactions/edit/:id" element={<EditTransaction />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/portfolio/transfer" element={<ExchangeStock />} />
          {/*<Route exact path="/portfolio/edit/:id" element={<EditExchange />} />*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
