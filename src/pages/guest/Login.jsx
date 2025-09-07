import React, { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: integrate real auth
    alert(`Logging in as ${form.email}`);
  };

  return (
    <div className="card" style={{ maxWidth: 480 }}>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label><br />
        <input id="email" name="email" type="email" placeholder="you@pfw.edu"
               value={form.email} onChange={onChange} required />
        <br /><br />
        <label htmlFor="password">Password</label><br />
        <input id="password" name="password" type="password" placeholder="********"
               value={form.password} onChange={onChange} required />
        <br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
