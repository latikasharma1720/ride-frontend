import React, { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: send to backend
    alert(`Account created for ${form.name}`);
  };

  return (
    <div className="card" style={{ maxWidth: 520 }}>
      <h1>Signup</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Full Name</label><br />
        <input id="name" name="name" type="text" placeholder="Latika Sharma"
               value={form.name} onChange={onChange} required />
        <br /><br />
        <label htmlFor="email">PFW Email</label><br />
        <input id="email" name="email" type="email" placeholder="you@pfw.edu"
               value={form.email} onChange={onChange} required />
        <br /><br />
        <label htmlFor="password">Password</label><br />
        <input id="password" name="password" type="password" placeholder="********"
               value={form.password} onChange={onChange} required />
        <br /><br />
        <button type="submit">Create account</button>
      </form>
    </div>
  );
}
