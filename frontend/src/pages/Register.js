import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await axios.post(
        "https://auth-0t88.onrender.com/api/auth/register",
        { name, email, password }
      );

      alert("Registered successfully 🎉");
      window.location.href = "/login";
    } catch (err) {
      alert("User already exists or error occurred");
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>

      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleRegister}>Register</button>

      <Link to="/login">Already have an account? Login</Link>
    </div>
  );
}
