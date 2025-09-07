import React, { useState } from "react";

export default function ProfileSettings() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    notifications: true,
  });

  const update = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const save = (e) => {
    e.preventDefault();
    // TODO: integrate API call
    alert("Profile saved (demo).");
  };

  return (
    <section className="container" style={{ padding: "40px 0" }}>
      <h1>Profile & Settings</h1>
      <form className="card" style={{ marginTop: 16 }} onSubmit={save}>
        <div style={{ display: "grid", gap: 12 }}>
          <label>
            Full Name
            <input
              className="input"
              name="fullName"
              value={form.fullName}
              onChange={update}
              placeholder="Your name"
            />
          </label>
          <label>
            PFW Email
            <input
              className="input"
              type="email"
              name="email"
              value={form.email}
              onChange={update}
              placeholder="name@pfw.edu"
            />
          </label>
          <label>
            Phone
            <input
              className="input"
              name="phone"
              value={form.phone}
              onChange={update}
              placeholder="(xxx) xxx-xxxx"
            />
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <input
              type="checkbox"
              name="notifications"
              checked={form.notifications}
              onChange={update}
            />
            Receive ride status notifications
          </label>

          <div>
            <button className="btn btn-primary" type="submit">Save Changes</button>
          </div>
        </div>
      </form>
    </section>
  );
}
