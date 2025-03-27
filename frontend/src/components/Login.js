import { useState } from "react";
import { loginUser } from "../api";
import { useNavigate } from "react-router-dom";
import "./../styles.css";


const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(user);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" type="email" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
        <input className="form-control mb-2" type="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
