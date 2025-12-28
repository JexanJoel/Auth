import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const token = localStorage.getItem("token");

    // If not logged in → redirect
    if (!token) {
      window.location.href = "/login";
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="auth-container">
      <h2>Home 🏠</h2>
      <p style={{ textAlign: "center" }}>
        You are logged in successfully!
      </p>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
