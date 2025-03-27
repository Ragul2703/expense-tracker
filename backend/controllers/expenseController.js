const Expense = require("../models/Expense");

const addExpense = async (req, res) => {
  try {
    const { category, amount } = req.body;
    const newExpense = new Expense({ userId: req.user.id, category, amount });
    await newExpense.save();
    res.status(201).json({ message: "Expense added" });
  } catch (error) {
    res.status(500).json({ message: "Error adding expense" });
  }
};

const deleteExpense = async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: "Expense deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting expense" });
  }
};

const getTotalExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ userId: req.user.id });
    const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    res.json({ total });
  } catch (error) {
    res.status(500).json({ message: "Error calculating total expense" });
  }
};

const getWeeklyReport = async (req, res) => {
  try {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const expenses = await Expense.find({
      userId: req.user.id,
      date: { $gte: oneWeekAgo },
    });
    res.json({ expenses });
  } catch (error) {
    res.status(500).json({ message: "Error fetching weekly report" });
  }
};

module.exports = { addExpense, deleteExpense, getTotalExpenses, getWeeklyReport };
