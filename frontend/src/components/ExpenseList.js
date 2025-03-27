import { useEffect, useState } from "react";
import { getExpenses, deleteExpense } from "../api";
import "./../styles.css";

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      getExpenses(token).then((res) => setExpenses(res.data.expenses));
    }
  }, [token]);

  const handleDelete = async (id) => {
    await deleteExpense(id, token);
    window.location.reload();
  };

  return (
    <div className="mt-3">
      <h4>Recent Expenses</h4>
      <ul className="list-group">
        {expenses.map((expense) => (
          <li key={expense._id} className="list-group-item d-flex justify-content-between">
            {expense.category} - ${expense.amount}
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(expense._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
