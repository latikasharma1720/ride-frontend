import React from "react";

export default function Services() {
  return (
    <section className="container" style={{ padding: "40px 0" }}>
      <h1>Services</h1>
      <div className="card" style={{ marginTop: 16 }}>
        <ol>
          <li><strong>Sign up</strong> with your PFW email.</li>
          <li><strong>Enter pickup & destination</strong> off-campus.</li>
          <li><strong>See the fare</strong> upfront and confirm.</li>
          <li><strong>Track your ride</strong> and view history anytime.</li>
        </ol>
      </div>
    </section>
  );
}
