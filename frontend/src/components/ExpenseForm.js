import { useState } from "react";
import { addExpense } from "../api";
import "./../styles.css";

const ExpenseForm = () => {
  const [expense, setExpense] = useState({ category: "", amount: "" });
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addExpense(expense, token);
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <input className="form-control mb-2" type="text" placeholder="Category" onChange={(e) => setExpense({ ...expense, category: e.target.value })} />
      <input className="form-control mb-2" type="number" placeholder="Amount" onChange={(e) => setExpense({ ...expense, amount: e.target.value })} />
      <button className="btn btn-success">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
