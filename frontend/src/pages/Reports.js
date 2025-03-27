import { useEffect, useState } from "react";
import { getExpenses } from "../api";

const Reports = () => {
  const [expenses, setExpenses] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      getExpenses(token).then((res) => setExpenses(res.data.expenses));
    }
  }, [token]);

  return (
    <div className="container mt-5">
      <div className="card p-4">
        <h2 className="mb-3">Weekly Expense Report</h2>
        {expenses.length === 0 ? (
          <p className="text-muted">No expenses recorded this week.</p>
        ) : (
          <table className="table table-bordered mt-3">
            <thead>
              <tr>
                <th>Date</th>
                <th>Category</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <tr key={expense._id}>
                  <td>{new Date(expense.date).toLocaleDateString()}</td>
                  <td>{expense.category}</td>
                  <td>${expense.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Reports;
