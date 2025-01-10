import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Accounts from "./pages/webapp/Accounts/Accounts";
import Login from "./pages/login/Login";
import Signup from "./pages/login/Signup";
import Budget from "./pages/webapp/Budget/Budget";
import Transactions from "./pages/webapp/Transactions/Transactions";
import Portfolio from "./pages/webapp/Portfolio/Portfolio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddAccount from "./pages/webapp/Accounts/AddAccount";
import AddBudgetEntry from "./pages/webapp/Budget/AddBudgetEntry";
import ExchangeStock from "./pages/webapp/Portfolio/ExchangeStock";
import AddTransaction from "./pages/webapp/Transactions/AddTransaction";
import EditBudgetEntry from "./pages/webapp/Budget/EditBudgetEntry";
import EditTransaction from "./pages/webapp/Transactions/EditTransaction";
import EditAccount from "./pages/webapp/Accounts/EditAccount";
import LoginPage from "./pages/login/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          {/*<Route exact path="/" element={<Index />} />*/}
          <Route exact path="/login" element={<LoginPage />} />
          {/*<Route exact path="/login" element={<Login />} />*/}
          <Route exact path="/login/create" element={<Signup />} />
          {/*<Route exact path="/documentation" element={<Documentation />} />*/}
          {/*<Route exact path="/blog" element={<Blog />} />*/}
          {/*<Route exact path="/download" element={<Download />} />*/}
          {/*<Route exact path="/documentation" element={<Documentation />} />*/}
          {/*<Route exact path="/webapp" element={<Dashboard />} />*/}
          <Route exact path="/webapp/accounts" element={<Accounts />} />
          <Route exact path="/webapp/accounts/add" element={<AddAccount />} />
          <Route exact path="/webapp/accounts/edit/:userID/:accountType" element={<EditAccount />} />
          <Route exact path="/webapp/budget" element={<Budget />} />
          <Route exact path="/webapp/budget/addEntry" element={<AddBudgetEntry />} />
          <Route exact path="/webapp/budget/editEntry/:userID/:budgetYear/:budgetMonth/:budgetAccount/" element={<EditBudgetEntry />} />
          <Route exact path="/webapp/transactions" element={<Transactions />} />
          <Route exact path="/webapp/transactions/add" element={<AddTransaction />} />
          <Route exact path="/webapp/transactions/edit/:id" element={<EditTransaction />} />
          {/*<Route exact path="/webapp/portfolio" element={<Portfolio />} />*/}
          {/*<Route exact path="/webapp/portfolio/transfer" element={<ExchangeStock />} />*/}
          {/*<Route exact path="/webapp/portfolio/edit/:id" element={<EditExchange />} />*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
