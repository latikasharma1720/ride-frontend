import React from "react";

export default function Pricing() {
  return (
    <section className="container" style={{ padding: "32px 0" }}>
      <h1>Pricing</h1>
      <div className="card" style={{ marginTop: 16 }}>
        <p><strong>Base Fare:</strong> $2.00</p>
        <p><strong>Per Mile:</strong> $1.20</p>
        <p><strong>Student Discount:</strong> up to 20% with valid PFW email</p>
        <p style={{ color: "#5b6a72" }}>
          No surge pricing during peak campus hours. Final fare shown before you confirm.
        </p>
      </div>
    </section>
  );
}
