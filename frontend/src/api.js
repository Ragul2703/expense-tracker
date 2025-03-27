import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Change if deploying

export const registerUser = (data) => axios.post(`${API_URL}/auth/register`, data);
export const loginUser = (data) => axios.post(`${API_URL}/auth/login`, data);
export const addExpense = (data, token) =>
  axios.post(`${API_URL}/expenses/add`, data, {
    headers: { Authorization: token },
  });
export const getExpenses = (token) =>
  axios.get(`${API_URL}/expenses/weekly-report`, {
    headers: { Authorization: token },
  });
export const deleteExpense = (id, token) =>
  axios.delete(`${API_URL}/expenses/delete/${id}`, {
    headers: { Authorization: token },
  });
export const getTotalExpense = (token) =>
  axios.get(`${API_URL}/expenses/total`, {
    headers: { Authorization: token },
  });
