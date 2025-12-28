import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="auth-container">
      <h1>Welcome</h1>
      <p style={{ textAlign: "center", marginBottom: "20px" }}>
        Simple MERN Authentication App
      </p>

      <Link to="/login">
        <button>Login</button>
      </Link>

      <Link to="/register">Create new account</Link>
    </div>
  );
}
