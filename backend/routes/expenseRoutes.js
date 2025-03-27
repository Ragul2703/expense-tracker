const express = require("express");
const { addExpense, deleteExpense, getTotalExpenses, getWeeklyReport } = require("../controllers/expenseController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/add", authMiddleware, addExpense);
router.delete("/delete/:id", authMiddleware, deleteExpense);
router.get("/total", authMiddleware, getTotalExpenses);
router.get("/weekly-report", authMiddleware, getWeeklyReport);

module.exports = router;
