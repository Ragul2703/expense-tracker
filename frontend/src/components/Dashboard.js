import { useEffect, useState } from "react";
import { getTotalExpense } from "../api";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import "./../styles.css";

const Dashboard = () => {
  const [totalExpense, setTotalExpense] = useState(0);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      getTotalExpense(token).then((res) => setTotalExpense(res.data.total));
    }
  }, [token]);

  return (
    <div className="container mt-4">
      <div className="card p-4">
        <h2>Dashboard</h2>
        <div className="alert alert-info">Total Expenses: <strong>${totalExpense}</strong></div>
        <ExpenseForm />
        <ExpenseList />
      </div>
    </div>
  );
};

export default Dashboard;
