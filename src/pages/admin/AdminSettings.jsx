import React, { useState } from "react";

export default function AdminSettings() {
  const [pricing, setPricing] = useState({
    baseFare: 2.0,
    perMile: 1.2,
    studentDiscount: 0.2,
  });

  const update = (e) => {
    const { name, value } = e.target;
    setPricing((p) => ({ ...p, [name]: Number(value) }));
  };

  const save = (e) => {
    e.preventDefault();
    // TODO: save via API
    alert("Admin settings saved (demo).");
  };

  return (
    <section className="container" style={{ padding: "40px 0" }}>
      <h1>Admin Settings / Profile</h1>
      <form className="card" style={{ marginTop: 16 }} onSubmit={save}>
        <div style={{ display: "grid", gap: 12 }}>
          <label>
            Base Fare ($)
            <input
              className="input"
              type="number"
              step="0.1"
              name="baseFare"
              value={pricing.baseFare}
              onChange={update}
            />
          </label>
          <label>
            Per Mile ($)
            <input
              className="input"
              type="number"
              step="0.1"
              name="perMile"
              value={pricing.perMile}
              onChange={update}
            />
          </label>
          <label>
            Student Discount (0–1)
            <input
              className="input"
              type="number"
              step="0.05"
              min="0"
              max="1"
              name="studentDiscount"
              value={pricing.studentDiscount}
              onChange={update}
            />
          </label>
          <div>
            <button className="btn btn-primary" type="submit">Save</button>
          </div>
        </div>
      </form>
    </section>
  );
}
