import { useState } from "react";
import { registerUser } from "../api";
import { useNavigate } from "react-router-dom";
import "./../styles.css";


const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(user);
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" type="text" placeholder="Name" onChange={(e) => setUser({ ...user, name: e.target.value })} />
        <input className="form-control mb-2" type="email" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
        <input className="form-control mb-2" type="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
        <button className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;
