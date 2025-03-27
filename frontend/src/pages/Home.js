import { Link } from "react-router-dom";
import "./../styles.css";

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <div className="card p-4">
        <h1 className="mb-3">Welcome to <span className="text-primary">Intelligent Expense Tracker</span></h1>
        <p className="text-muted">Track and manage your expenses efficiently with AI-powered categorization.</p>
        <div className="mt-4">
          <Link to="/register" className="btn btn-primary btn-custom mx-2">Register</Link>
          <Link to="/login" className="btn btn-success btn-custom mx-2">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
