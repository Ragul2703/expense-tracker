import { Link } from "react-router-dom";
import { useState } from "react";
import "./../styles.css";

const Navbar = () => {
  const [isNavbarCollapsed, setNavbarCollapsed] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient shadow-sm border-bottom border-warning">
      <div className="container">
        <Link className="navbar-brand fw-bold text-warning" to="/">💰 Expense Tracker</Link>

        {/* Toggle Button for Mobile */}
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setNavbarCollapsed(!isNavbarCollapsed)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className={`collapse navbar-collapse ${isNavbarCollapsed ? "" : "show"}`}>
          <div className="navbar-nav ms-auto">
            <Link className="nav-link btn btn-outline-light rounded-pill px-3 mx-2" to="/dashboard">
              Dashboard
            </Link>
            <Link className="nav-link btn btn-outline-light rounded-pill px-3 mx-2" to="/reports">
              Reports
            </Link>
            <button className="nav-link btn btn-danger rounded-pill px-3 mx-2" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
