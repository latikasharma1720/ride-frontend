import React from "react";

export default function About() {
  return (
    <section className="container" style={{ padding: "40px 0" }}>
      <h1>About MastoRide</h1>
      <div className="card" style={{ marginTop: 16 }}>
        <p>
          MastoRide connects PFW students with safe and affordable rides to off-campus
          destinations. We’re focused on transparent pricing, student-first policies,
          and a simple booking experience.
        </p>
        <ul style={{ marginTop: 12 }}>
          <li>No surge pricing during peak campus hours</li>
          <li>Upfront fares before you confirm</li>
          <li>Verified student community</li>
        </ul>
      </div>
    </section>
  );
}
