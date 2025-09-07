import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // TEMP: hard-coded admins (replace with real auth later)
  const ADMINS = ["admin@pfw.edu", "shari01@pfw.edu"].map((e) => e.toLowerCase());

  const handleSubmit = (e) => {
    e.preventDefault();

    const userEmail = email.trim().toLowerCase();

    // very basic “auth”: treat PFW emails as valid users
    const isPfwEmail = /@pfw\.edu$/i.test(userEmail);
    if (!isPfwEmail) {
      alert("Please use a valid PFW email address.");
      return;
    }

    const role = ADMINS.includes(userEmail) ? "admin" : "student";
    localStorage.setItem("role", role);
    localStorage.setItem("email", userEmail);

    // redirect
    if (role === "admin") {
      navigate("/admin/reports", { replace: true });
    } else {
      navigate("/student/profile", { replace: true });
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
