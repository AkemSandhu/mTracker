import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Accounts from "./pages/webapp/Accounts/Accounts";
import Signup from "./pages/login/Signup";
import Budget from "./pages/webapp/Budget/Budget";
import Transactions from "./pages/webapp/Transactions/Transactions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddAccount from "./pages/webapp/Accounts/AddAccount";
import AddBudgetEntry from "./pages/webapp/Budget/AddBudgetEntry";
import AddTransaction from "./pages/webapp/Transactions/AddTransaction";
import EditBudgetEntry from "./pages/webapp/Budget/EditBudgetEntry";
import EditTransaction from "./pages/webapp/Transactions/EditTransaction";
import EditAccount from "./pages/webapp/Accounts/EditAccount";
import Login from "./pages/login/Login";
import Dashboard from "./pages/webapp/Dashboard";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/Contact";
import Documentation from "./pages/Documentation";
import Download from "./pages/Download";
import Home from "./pages/Home";
import Literacy from "./pages/blog/posts/Literacy";
import Making from "./pages/blog/posts/Making";
import Features from "./pages/Features";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/login/create" element={<Signup />} />
          <Route exact path="/documentation" element={<Documentation />} />
          <Route exact path="/features" element={<Features />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/blog/literacy" element={<Literacy />} />
          <Route exact path="/blog/making" element={<Making />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/download" element={<Download />} />
          <Route exact path="/webapp" element={<Dashboard />} />
          <Route exact path="/webapp/accounts" element={<Accounts />} />
          <Route exact path="/webapp/accounts/add" element={<AddAccount />} />
          <Route exact path="/webapp/accounts/edit/:userID/:accountType" element={<EditAccount />} />
          <Route exact path="/webapp/budget" element={<Budget />} />
          <Route exact path="/webapp/budget/addEntry" element={<AddBudgetEntry />} />
          <Route exact path="/webapp/budget/editEntry/:userID/:budgetYear/:budgetMonth/:budgetAccount/" element={<EditBudgetEntry />} />
          <Route exact path="/webapp/transactions" element={<Transactions />} />
          <Route exact path="/webapp/transactions/add" element={<AddTransaction />} />
          <Route exact path="/webapp/transactions/edit/:id" element={<EditTransaction />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
