import React from "react";

export default function FAQ() {
  return (
    <section className="container" style={{ padding: "32px 0" }}>
      <h1>FAQ</h1>
      <div className="card" style={{ marginTop: 16 }}>
        <h3>Who can use MastoRide?</h3>
        <p>PFW students with a valid .edu email.</p>

        <h3 style={{ marginTop: 16 }}>How is pricing calculated?</h3>
        <p>Base fare + distance. Student discounts apply automatically.</p>

        <h3 style={{ marginTop: 16 }}>Can I schedule a ride?</h3>
        <p>Yes—after signup you can book in advance and track your ride.</p>
      </div>
    </section>
  );
}
